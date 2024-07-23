import styled from 'styled-components';
// assets
import CreditImage from '@assets/svg/ic_credit.svg';
import CreditWhiteImage from '@assets/svg/ic_credit_white.svg';
import DeleteButton from '@assets/svg/btn_delete_24px.svg';
import ArrowLeftButton from '@assets/svg/ic_arrow_left.svg';
import LeftTopGradient from '@assets/svg/Image_top.svg';

export const StyledDeleteButton = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;

  background-image: url(${DeleteButton});
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledArrowLeftButton = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;

  background-image: url(${ArrowLeftButton});
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

export const LeftTopGradientDesign = styled.div`
  display: block;
  position: absolute;
  width: 199px;
  height: 273px;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;

  background-image: url(${LeftTopGradient});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
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
