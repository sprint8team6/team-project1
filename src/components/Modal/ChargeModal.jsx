import { useState } from 'react';
import styled from 'styled-components';
import {
  ModalBackground,
  ModalWindow,
  BasedContainer,
  StyledCreditIcon,
  StyledCreditIconWhite,
} from '@styles/CommonStyles';
import ModalTopBar from '@components/Modal/ModalTopbar';
import RadioButton from '@components/RadioButton';
import Button from '@components/Button';

/** 크레딧 충전 모달
 * @param {boolean} isOpen - 모달이 열려 있는지 여부
 * @param {function} onClose - 모달을 닫기 위한 함수
 * @param {boolean} selected - 선택 시, value CreditOptionButton의 value값과 같으면 selected 됨
 * @returns {React.Element} 크레딧 충전 모달
 */
export default function ChargeModal({ isOpen, onClose }) {
  // State
  const [optionValue, setOptionValue] = useState('100');

  if (!isOpen) return null;

  const handleOption = (e) => {
    setOptionValue(e.target.value);
  };

  return (
    <ModalBackground>
      <StyledChargeModalWindow>
        <ModalTopBar onClose={onClose}>크레딧 충전하기</ModalTopBar>
        <StyledContainer>
          <StyledButtonWrapper>
            <CreditOptionButton
              value="100"
              optionValue={optionValue}
              onClick={handleOption}
            />
            <CreditOptionButton
              value="500"
              optionValue={optionValue}
              onClick={handleOption}
            />
            <CreditOptionButton
              value="1000"
              optionValue={optionValue}
              onClick={handleOption}
            />
          </StyledButtonWrapper>
          <ChargeButton onClose={onClose} />
        </StyledContainer>
      </StyledChargeModalWindow>
    </ModalBackground>
  );
}

// styled-components

const StyledChargeModalWindow = styled(ModalWindow)`
  display: flex;
  position: fixed;
  z-index: 1000;

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

const CreditOptionButton = ({ value, optionValue, onClick }) => {
  <StyledCreditOptionButton
    value={value}
    onClick={onClick}
    selected={optionValue === value}
  >
    <StyledCreditIcon />
    {value}
    <ModalRadioButton checked={optionValue === value} />
  </StyledCreditOptionButton>;
};

const ChargeButton = ({ onClose }) => {
  const submitOption = () => {
    /** @todo Credit 올라가는 로직 */
    onClose();
  };

  return (
    <Button onClick={submitOption}>
      <StyledCreditIconWhite />
      충전하기
    </Button>
  );
};
