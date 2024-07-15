import React from 'react';
import styled from 'styled-components';
import { useModalContext } from '@contexts/ModalContext';
import {
  ModalWindow,
  BasedContainer,
  ModalBackground,
} from '@styles/CommonStyles';
import ModalTopBar from '@components/Modal/ModalTopbar';
import Button from '@components/Button';
// assets
import CreditImg from '@assets/svg/ic_credit.svg';

/** 팝업 모달 컴포넌트
 * @param {boolean} isOpen - 모달이 열려 있는지 여부
 * @param {function} onClose - 모달을 닫기 위한 함수
 * @return {JSX.Element} 팝업 모달 컴포넌트
 */
export default function PopupModal({ isOpen, onClose }) {
  // Context
  const { modals } = useModalContext();

  if (!isOpen) return null;

  return (
    <ModalBackground>
      <StyledPopupWindow>
        <ModalTopBar onClose={onClose} />
        <StyledContainer>
          <StyledCreditDiv />
          <PopupLabel Description={modals?.PopupModal.data} />
          <Button onClick={onClose}>확인</Button>
        </StyledContainer>
      </StyledPopupWindow>
    </ModalBackground>
  );
}

// styled-components

const StyledPopupWindow = styled(ModalWindow)`
  display: flex;
  position: fixed;
  z-index: 2000;

  width: 339px;
  height: 331px;

  background-image: url(${CreditImg});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center top 12px;
`;

const StyledContainer = styled(BasedContainer)`
  gap: 24px;

  label {
    font-size: 16px;
    font-style: normal;
    color: var(--white);
    line-height: 26px;
  }
`;

const StyledCreditDiv = styled.div`
  width: 118px;
  height: 118px;
`;

const PopupLabel = ({ Description }) => {
  return (
    <label>
      앗! {Description}하기 위한 <em>크레딧</em>이 부족해요!
    </label>
  );
};
