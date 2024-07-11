import { Link } from 'react-router-dom';
import styled from 'styled-components';
// assets
import CreditImg from '@assets/svg/ic_credit.svg';
import DeleteButton from '@assets/svg/btn_delete_24px.svg';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: var(--light-black);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 24px;
`;

export const StyledDeleteButton = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;

  background-image: url(${DeleteButton});
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 31px;

  label {
    font-size: 16px;
    font-style: normal;
    color: var(--white);
    line-height: 26px;
  }
`;
