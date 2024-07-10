import React from 'react';
import styled from 'styled-components';
import { ModalContainer } from '../styles/CommonStyles.js';
import Button from './Button';

// files
import CreditImg from '../assets/svg/credit_big.svg';
import DeleteButton from '../assets/svg/btn_delete_24px.svg';

/** 팝업 모달 컴포넌트 */
export default function PopUp() {
  return (
    <PopupContainer>
      <TopBar>
        <StyledDeleteButton src={DeleteButton} alt="Delete" />
      </TopBar>
      <Content>
        <CreditDiv />
        <label>
          앗! 투표하기 위한 <em>크레딧</em>이 부족해요!
        </label>
        <Button>확인</Button>
      </Content>
    </PopupContainer>
  );
}

// styled-components

/** @todo 공용 스타일로 뺄 부분들 빼고 상속해서 써야할듯? */
export const PopupContainer = styled(ModalContainer)`
  width: 339px;
  height: 331px;

  background-image: url(${CreditImg});
  background-repeat: no-repeat;
  background-position: top;
`;

const TopBar = styled.div`
  display: flex;
  width: 295px;
  height: 24px;
  padding-left: 271px;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`;

const CreditDiv = styled.div`
  width: 118px;
  height: 118px;
`;

const StyledDeleteButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  width: 295px;
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
