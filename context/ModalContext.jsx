'use client';

import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [seatLockOpen, setSeatLockOpen] = useState(false);
  const [videoTitle, setVideoTitle] = useState(null);
  const [preselectedProgram, setPreselectedProgram] = useState('');

  const openRegister = (programName) => {
    setLoginOpen(false);
    setSeatLockOpen(false);
    if (programName && typeof programName === 'string') {
      setPreselectedProgram(programName);
    }
    setRegisterOpen(true);
  };

  const openLogin = () => {
    setRegisterOpen(false);
    setSeatLockOpen(false);
    setLoginOpen(true);
  };

  const openSeatLock = () => {
    setRegisterOpen(false);
    setLoginOpen(false);
    setSeatLockOpen(true);
  };

  const openVideo = (title) => {
    setVideoTitle(title);
  };

  const closeModals = () => {
    setRegisterOpen(false);
    setLoginOpen(false);
    setSeatLockOpen(false);
    setVideoTitle(null);
  };

  return (
    <ModalContext.Provider
      value={{
        registerOpen,
        loginOpen,
        seatLockOpen,
        videoTitle,
        preselectedProgram,
        openRegister,
        openLogin,
        openSeatLock,
        openVideo,
        closeModals,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
