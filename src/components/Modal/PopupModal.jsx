import React from 'react';
import styled from 'styled-components';
import {
  ModalContainer,
  BasedContainer,
  ModalBackground,
} from '@styles/CommonStyles';
import ModalTopBar from '@components/Modal/ModalTopbar';
import Button from '@components/Button';
// assets
import CreditImg from '@assets/svg/ic_credit.svg';

/** 팝업 모달 컴포넌트
 * @param {boolean} isOpen
 * @param {function} onClose
 *
 */
export default function PopupModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <ModalBackground>
        <StyledPopupContainer>
          <ModalTopBar onClick={onClose} />
          <StyledContainer>
            <StyledCreditDiv />
            <label>
              앗! 투표하기 위한 <em>크레딧</em>이 부족해요!
            </label>
            <Button onClick={onClose}>확인</Button>
          </StyledContainer>
        </StyledPopupContainer>
      </ModalBackground>
    </>
  );
}

// styled-components

const StyledPopupContainer = styled(ModalContainer)`
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

const StyledCreditDiv = styled.div`
  width: 118px;
  height: 118px;
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
