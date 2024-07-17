import styled, { keyframes } from 'styled-components';

// assets
import CreditImage from '@assets/svg/ic_credit.svg';
import CreditWhiteImage from '@assets/svg/ic_credit_white.svg';
import DeleteButton from '@assets/svg/btn_delete_24px.svg';

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

export const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  align-self: stretch;
  background: rgba(255, 255, 255, 0.1);
`;
