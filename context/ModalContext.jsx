'use client';

import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [videoTitle, setVideoTitle] = useState(null);
  const [preselectedProgram, setPreselectedProgram] = useState('');
  const [prefilledPhone, setPrefilledPhone] = useState('');

  const openRegister = (programName, phone) => {
    if (programName && typeof programName === 'string') setPreselectedProgram(programName);
    setPrefilledPhone(phone && typeof phone === 'string' ? phone : '');
    setRegisterOpen(true);
  };

  const openVideo = (title) => setVideoTitle(title);

  const closeModals = () => {
    setRegisterOpen(false);
    setVideoTitle(null);
    setPrefilledPhone('');
  };

  return (
    <ModalContext.Provider
      value={{ registerOpen, videoTitle, preselectedProgram, prefilledPhone, openRegister, openVideo, closeModals }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
}
