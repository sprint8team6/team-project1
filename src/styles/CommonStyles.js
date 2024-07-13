import styled, { keyframes } from 'styled-components';

// assets
import CreditImage from '@assets/svg/ic_credit.svg';
import CreditWhiteImage from '@assets/svg/ic_credit_white.svg';
import DeleteButton from '@assets/svg/btn_delete_24px.svg';

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

export const StyledDeleteButton = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;

  background-image: url(${DeleteButton});
  background-repeat: no-repeat;
  background-position: center;
`;

export const BasedContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BasedCreditIcon = styled.i`
  width: 20px;
  height: 20px;
  background-image: url(${CreditImage});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;

export const StyledCreditIcon = styled(BasedCreditIcon)`
  background-image: url(${CreditImage});
`;

export const StyledCreditIconWhite = styled(BasedCreditIcon)`
  background-image: url(${CreditWhiteImage});
`;
