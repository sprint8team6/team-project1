import React, { createContext, useState, useCallback, useContext } from 'react';

const ModalContext = createContext();

/**
 * Modal을 Context로 설정하는 Provider
 *
 * @param children - 태그 내부 (자식 컴포넌트들)
 */
export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({
    ChargeModal: { isOpen: false, data: null }, // 충전 모달
    DonationModal: { isOpen: false, data: null }, // 후원하기 모달
    VoteModal: { isOpen: false, data: null }, // 투표 모달
    PopupModal: { isOpen: false, data: null }, // 크레딧이 부족할 때 모달
  });

  const openModal = useCallback((modalName, data = null) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: { isOpen: true, data },
    }));
  }, []);

  const closeModal = useCallback((modalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: { isOpen: false, data: null },
    }));
  }, []);

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

/**
 * Modal 컨텍스트를 사용하기 위한 Custom Hook
 *
 * 모달을 열고 닫을 때 사용합니다.
 *
 * @returns
 * - {Object} modals - 모든 모달의 현재 상태 (열렸는지/닫혔는지)
 * - {Function} openModal - 모달 이름으로 모달을 여는 함수
 * - {Function} closeModal - 모달 이름으로 모달을 닫는 함수
 */
export const useModalContext = () => useContext(ModalContext);
