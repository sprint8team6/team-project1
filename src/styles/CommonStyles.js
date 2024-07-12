import { Link } from 'react-router-dom';
import styled from 'styled-components';

// assets
import CreditImg from '@assets/svg/ic_credit.svg';
import CreditWhiteImg from '@assets/svg/ic_credit_white.svg';
import DeleteButton from '@assets/svg/btn_delete_24px.svg';

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

export const ModalContainer = styled.div`
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
  background-image: url(${CreditImg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;

export const StyledCreditIcon = styled(BasedCreditIcon)`
  background-image: url(${CreditImg});
`;

export const StyledCreditIconWhite = styled(BasedCreditIcon)`
  background-image: url(${CreditWhiteImg});
`;
