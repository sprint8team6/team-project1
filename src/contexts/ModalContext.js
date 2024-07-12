import React, { createContext, useState, useCallback, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({});

  const openModal = useCallback((modalName) => {
    setModals((prevModals) => ({ ...prevModals, [modalName]: true }));
  }, []);

  const closeModal = useCallback((modalName) => {
    setModals((prevModals) => ({ ...prevModals, [modalName]: false }));
  }, []);

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
