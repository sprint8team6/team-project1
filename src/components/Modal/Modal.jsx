import PropTypes from 'prop-types';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

/** 공용 모달 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {boolean} props.isOpen - 모달이 열려 있는지 여부
 * @param {function} props.onClose - 모달을 닫기 위한 함수
 * @return {JSX.Element} 공용 모달 컴포넌트
 */
export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <ModalBackground onClick={handleBackgroundClick}>
      {children}
    </ModalBackground>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const fadeInModal = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  animation: ${fadeInModal} 0.8s ease-out;
`;

export const ModalWindow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: var(--light-black);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 24px;
  z-index: 1000;
  animation: ${fadeInModal} 0.8s ease-out;
`;
