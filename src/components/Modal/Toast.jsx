import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { useModalContext } from '@contexts/useModalContext';
import {
  BasedContainer,
  StyledCreditIcon,
  StyledDivider,
} from '@styles/CommonStyles';

/** 팝업 모달 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {boolean} props.isOpen - Toast가 열려 있는지 여부
 * @param {function} props.onClose - Toast를 닫기 위한 함수
 * @param {string} props.message - Toast에 표시할 메시지
 * @return {JSX.Element} Toast 컴포넌트
 */
export default function Toast({ isOpen = true, onClose, message }) {
  if (!isOpen) return null;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 6000); // 6초 후 모달 닫기
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AlignDiv>
      <StyledToastWindow>
        <StyledContainer>
          <StyledCreditIcon />
          <StyledDivider />
          {message}
        </StyledContainer>
      </StyledToastWindow>
    </AlignDiv>
  );
}

Toast.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.node.isRequired,
};

const ToastAnimation = keyframes`
  0% { 
    transform: translateY(0);
  }
  30%, 70% {
    transform: translateY(-108px);
  }
  100% {
    transform: translateY(0);
  }
`;

const AlignDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const StyledToastWindow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: -100px;
  width: auto;
  height: auto;
  padding: 12px 24px;
  border: 1px solid var(--brand-coral);
  border-radius: 12px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--light-black);
  animation: ${ToastAnimation} 6s ease-in-out;
  gap: 4px;
  z-index: 1000;
  pointer-events: none;
`;

const StyledContainer = styled(BasedContainer)`
  display: flex;
  gap: 4px;
  width: auto;
  min-width: 100px;
  pointer-events: none;

  span {
    font-size: 16px;
    font-style: normal;
    color: var(--white);
    line-height: 26px;
  }
`;
