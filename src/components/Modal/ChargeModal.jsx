import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState } from 'react';
import {
  BasedContainer,
  StyledCreditIcon,
  StyledCreditIconWhite,
  StyledDivider,
} from '@styles/CommonStyles';
import { useCreditContext } from '@contexts/useCreditContext';
import { useToastContext } from '@contexts/useToastContext';
import Modal, { ModalWindow } from '@components/Modal/Modal';
import ModalTopBar from '@components/Modal/ModalTopbar';
import { JustRadioShape } from '@components/RadioButton';
import Button from '@components/Button';

/** 크레딧 충전 모달
 * @param {Object} props - 컴포넌트 props
 * @param {boolean} props.isOpen - 모달이 열려 있는지 여부
 * @param {function} props.onClose - 모달을 닫기 위한 함수
 * @returns {React.Element} 크레딧 충전 모달
 */
export default function ChargeModal({ isOpen, onClose }) {
  // State
  const [optionValue, setOptionValue] = useState(100);

  // Context
  const { myCredit, setMyCredit } = useCreditContext();
  const { addToast } = useToastContext();

  const handleOption = (e) => {
    setOptionValue(Number(e.target.dataset.value));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <StyledChargeModalWindow>
        <ModalTopBar onClose={onClose}>크레딧 충전하기</ModalTopBar>
        <StyledContainer>
          <StyledButtonWrapper>
            <CreditOptionButton
              value={100}
              optionValue={optionValue}
              onClick={handleOption}
            />
            <CreditOptionButton
              value={500}
              optionValue={optionValue}
              onClick={handleOption}
            />
            <CreditOptionButton
              value={1000}
              optionValue={optionValue}
              onClick={handleOption}
            />
          </StyledButtonWrapper>
          <ChargeButton
            onClose={onClose}
            addToast={addToast}
            optionValue={optionValue}
            myCredit={myCredit}
            setMyCredit={setMyCredit}
          />
        </StyledContainer>
      </StyledChargeModalWindow>
    </Modal>
  );
}

ChargeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

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

const ModalRadioButton = styled(JustRadioShape)`
  position: absolute;
  right: 20px;
`;

const CreditOptionButton = ({ value, optionValue, onClick }) => {
  return (
    <StyledCreditOptionButton
      data-value={value}
      onClick={onClick}
      selected={optionValue === value}
    >
      <StyledCreditIcon />
      {value.toString()}
      <ModalRadioButton checked={optionValue === value} />
    </StyledCreditOptionButton>
  );
};

CreditOptionButton.propTypes = {
  value: PropTypes.number,
  optionValue: PropTypes.number,
  onClick: PropTypes.func,
};

const ChargeButton = ({
  onClose,
  addToast,
  optionValue,
  myCredit,
  setMyCredit,
}) => {
  const submitOption = () => {
    setMyCredit(Number(myCredit) + optionValue);
    addToast(
      <span>
        <em>{optionValue.toString()}</em> 만큼의 크레딧 충전을 완료했습니다.
      </span>
    );
    onClose();
  };

  return (
    <Button onClick={submitOption}>
      <StyledCreditIconWhite />
      충전하기
    </Button>
  );
};

ChargeButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  addToast: PropTypes.func.isRequired,
  optionValue: PropTypes.number.isRequired,
  myCredit: PropTypes.number.isRequired,
  setMyCredit: PropTypes.func.isRequired,
};
