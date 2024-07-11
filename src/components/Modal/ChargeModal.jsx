import React from 'react';
import styled from 'styled-components';
import {
  ModalContainer,
  BasedContainer,
  StyledCreditIcon,
  StyledCreditIconWhite,
} from '@styles/CommonStyles';
import ModalTopBar from '@components/Modal/ModalTopbar';
import RadioButton from '@components/RadioButton';
import Button from '@components/Button';

/** 크레딧 충전 모달
 * @param {boolean} selected - 선택 시, value CreditOptionButton의 value값과 같으면 selected 됨
 * @returns {React.Element} 크레딧 충전 모달
 */
export default function ChargeModal({ selected = '0' }) {
  return (
    <ChargeModalContainer>
      <ModalTopBar>크레딧 충전하기</ModalTopBar>
      <StyledContainer>
        <StyledButtonWrapper>
          <CreditOptionButton value="100" selected={selected} />
          <CreditOptionButton value="500" selected={selected} />
          <CreditOptionButton value="1000" selected={selected} />
        </StyledButtonWrapper>
        <ChargeButton />
      </StyledContainer>
    </ChargeModalContainer>
  );
}

// styled-components

const ChargeModalContainer = styled(ModalContainer)`
  display: flex;
  gap: 24px;
  width: 327px;
  height: 372px;
  border-radius: 8px;
  background: var(--light-black, #181d26);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const StyledContainer = styled(BasedContainer)`
  gap: 24px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const StyledCreditOptionButton = styled.button`
  position: relative;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 62px;
  padding-left: 44px;
  flex-shrink: 0;

  border-radius: 8px;
  border: 1px solid
    var(${({ selected }) => (selected === true ? '--brand-coral' : '--white')});
  background: var(--dark-black, #02000e);

  color: ${({ selected }) =>
    selected === true ? '#FFFFFF' : 'var(--medium-gray)'};
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 130% */

  ${StyledCreditIcon} {
    // 크레딧 충전 버튼 좌측에 위치
    position: absolute;
    left: 20px;
  }
`;

const ModalRadioButton = styled(RadioButton)`
  position: absolute;
  right: 20px;
`;

const CreditOptionButton = ({ value, selected }) => (
  <StyledCreditOptionButton selected={selected === value}>
    <StyledCreditIcon />
    {value}
    <ModalRadioButton checked={selected === value} />
  </StyledCreditOptionButton>
);

const ChargeButton = () => (
  <Button>
    <StyledCreditIconWhite />
    충전하기
  </Button>
);
