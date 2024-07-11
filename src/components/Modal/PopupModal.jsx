import React from 'react';
import styled from 'styled-components';
import { ModalContainer, StyledContainer } from '@styles/CommonStyles';
import ModalTopBar from '@components/Modal/ModalTopbar';
import Button from '@components/Button';
// assets
import CreditImg from '@assets/svg/ic_credit.svg';

/** 팝업 모달 컴포넌트 */
export default function PopupModal() {
  return (
    <StyledPopupContainer>
      <ModalTopBar />
      <StyledContainer>
        <StyledCreditDiv />
        <label>
          앗! 투표하기 위한 <em>크레딧</em>이 부족해요!
        </label>
        <Button>확인</Button>
      </StyledContainer>
    </StyledPopupContainer>
  );
}

// styled-components
const StyledPopupContainer = styled(ModalContainer)`
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
