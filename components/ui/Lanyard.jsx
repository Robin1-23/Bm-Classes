/* eslint-disable react/no-unknown-property */
'use client';
import React, { Component, Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';
import './Lanyard.css';

extend({ MeshLineGeometry, MeshLineMaterial });

// 1x1 transparent pixel
const BLANK_PIXEL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    if (error && typeof error.then === 'function') {
      return { hasError: false };
    }
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.warn('Lanyard 3D ErrorBoundary caught error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="relative z-10 overflow-hidden rounded-[30px] shadow-xl border-2 border-white bg-white p-2.5">
          <img 
            src="/CELEBRATION_PHOTO.jpg" 
            alt="BM CLASSES Top Rank Student Celebration" 
            className="w-full h-[450px] object-cover rounded-[20px]"
          />
        </div>
      );
    }
    return this.props.children;
  }
}

export default function Lanyard(props) {
  return (
    <ErrorBoundary>
      <LanyardContent {...props} />
    </ErrorBoundary>
  );
}

function LanyardContent({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 1
}) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return <div className="lanyard-wrapper" />;

  const effectivePosition = isMobile ? [0, 0, 24] : position;
  const effectiveFov = isMobile ? 24 : fov;

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position: effectivePosition, fov: effectiveFov }}
        dpr={isMobile ? 1 : 1.25}
        gl={{ alpha: transparent, powerPreference: 'high-performance', antialias: true }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        {/* Fast zero-network local lighting */}
        <ambientLight intensity={1.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.8} />
        <directionalLight position={[-5, 5, 2]} intensity={1.0} />
        <pointLight position={[0, -2, 4]} intensity={0.6} />

        <Suspense fallback={null}>
          <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
            <Band
              isMobile={isMobile}
              frontImage={frontImage}
              backImage={backImage}
              imageFit={imageFit}
              lanyardImage={lanyardImage}
              lanyardWidth={lanyardWidth}
            />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 1
}) {
  const band = useRef(),
    fixed = useRef(),
    j1 = useRef(),
    j2 = useRef(),
    j3 = useRef(),
    card = useRef();
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const segmentProps = {
    type: 'dynamic',
    canSleep: true,
    colliders: false,
    angularDamping: isMobile ? 6 : 4,
    linearDamping: isMobile ? 6 : 4
  };

  // 3D Box Geometry (width: 1.6, height: 2.25, depth: 0.02)
  const cardGeo = useMemo(() => new THREE.BoxGeometry(1.6, 2.25, 0.02), []);
  const clipGeo = useMemo(() => {
    const g = new THREE.CylinderGeometry(0.12, 0.12, 0.2, 16);
    g.rotateX(Math.PI / 2);
    return g;
  }, []);
  const clampGeo = useMemo(() => new THREE.BoxGeometry(0.3, 0.15, 0.08), []);
  const metalMat = useMemo(() => new THREE.MeshStandardMaterial({ color: 0xdddddd, metalness: 0.9, roughness: 0.2 }), []);

  const texture = useTexture(lanyardImage || '/lanyard.png');
  const frontTex = useTexture(frontImage || '/CELEBRATION_PHOTO.jpg');
  const backTex = useTexture(backImage || frontImage || '/CELEBRATION_PHOTO.jpg');

  // Fast single full-size texture map for card faces
  const [frontTextureMap, backTextureMap] = useMemo(() => {
    const createFaceCanvas = (texImage) => {
      if (!texImage) return null;
      const W = 1024;
      const H = 1024;
      const canvas = document.createElement('canvas');
      canvas.width = W;
      canvas.height = H;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, W, H);

      ctx.filter = 'contrast(1.22) brightness(1.05) saturate(1.12)';

      const scale = Math.max(W / texImage.width, H / texImage.height);
      const dw = texImage.width * scale;
      const dh = texImage.height * scale;
      const dx = (W - dw) / 2;
      const dy = (H - dh) / 2;

      ctx.drawImage(texImage, dx, dy, dw, dh);
      ctx.filter = 'none';

      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 8;
      tex.needsUpdate = true;
      return tex;
    };

    const front = frontTex?.image ? createFaceCanvas(frontTex.image) : null;
    const back = backTex?.image ? createFaceCanvas(backTex.image) : front;
    return [front, back];
  }, [frontTex?.image, backTex?.image]);

  const cardMaterials = useMemo(() => {
    const side = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.3,
      metalness: 0.1,
    });
    const front = new THREE.MeshStandardMaterial({
      map: frontTextureMap,
      roughness: 0.4,
      metalness: 0.05,
    });
    const back = new THREE.MeshStandardMaterial({
      map: backTextureMap,
      roughness: 0.4,
      metalness: 0.05,
    });
    return [side, side, side, side, front, back];
  }, [frontTextureMap, backTextureMap]);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0]
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      if (band.current?.geometry) {
        band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      }
      if (card.current) {
        ang.copy(card.current.angvel());
        rot.copy(card.current.rotation());
        card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
      }
    }
  });

  curve.curveType = 'chordal';
  if (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  }

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={isMobile ? 1.8 : 2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={e => (e.target?.releasePointerCapture?.(e.pointerId), drag(false))}
            onPointerDown={e => (
              e.target?.setPointerCapture?.(e.pointerId),
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current?.translation() || new THREE.Vector3())))
            )}
          >
            <mesh geometry={cardGeo} material={cardMaterials} />
            <mesh geometry={clipGeo} material={metalMat} />
            <mesh geometry={clampGeo} material={metalMat} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={isMobile ? 0.85 : lanyardWidth}
        />
      </mesh>
    </>
  );
}

// Preload textures in parallel at module initialization for instant loading
useTexture.preload('/lanyard.png');
useTexture.preload('/CELEBRATION_PHOTO.jpg');
