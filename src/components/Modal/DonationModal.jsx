import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useModalContext } from '@contexts/useModalContext';
import { useCreditContext } from '@contexts/useCreditContext';
import { useToastContext } from '@contexts/useToastContext';
import Modal, { ModalWindow } from '@components/Modal/Modal';
import ModalTopBar from '@components/Modal/ModalTopbar';
import {
  BasedContainer,
  StyledCreditIcon,
  StyledDivider,
} from '@styles/CommonStyles';
import Button from '@components/Button';
// assets
import AltImage from '@assets/png/alt_image.png';
// APIs
import { putDonationsContribute } from '@apis/idolApi';

/** 후원 모달 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {boolean} props.isOpen - 모달이 열려 있는지 여부
 * @param {function} props.onClose - 모달을 닫기 위한 함수
 * @return {JSX.Element} 후원 모달 컴포넌트
 */
export default function DonationModal({ isOpen, onClose }) {
  // State
  const [inputValue, setInputValue] = useState(''); // [type:number]
  const [isError, setIsError] = useState(true); // 크레딧이 부족할 때

  // Context
  const { modals, openModal } = useModalContext();
  const idolData = modals.DonationModal?.data;
  const { myCredit, setMyCredit } = useCreditContext();
  const { addToast } = useToastContext();

  // inputValue의 값이 크레딧보다 높으면 Error
  useEffect(() => {
    if (Number(inputValue) > myCredit) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // 조공에 후원
  const handleSubmit = (e) => {
    e.preventDefault();
    const submitAmount = Number(inputValue);
    if (submitAmount > myCredit) {
      openModal('PopupModal', {
        message: (
          <span>
            앗! 후원하기 위한 <em>크레딧</em>이 부족해요!
          </span>
        ),
      });
    }
    if (submitAmount <= myCredit) {
      try {
        putDonationsContribute({
          donationId: idolData.donationId,
          donationAmount: submitAmount,
        });
        setMyCredit(myCredit - submitAmount);
        addToast(
          <span>
            <em>후원</em>을 완료했습니다!
          </span>
        );
      } catch (error) {
        console.error('Failed to submit donation:', error);
      } finally {
        onClose();
      }
    }
  };

  const KeyPressed = (e) => {
    if (e.key === 'ArrowUp' && inputValue !== '0') {
      e.preventDefault();
      const nextInputValue = Number(inputValue) + 100;
      setInputValue(nextInputValue);
    }
    if (e.key === 'ArrowDown' && inputValue !== '0') {
      e.preventDefault();
      let nextInputValue = Number(inputValue) - 100;
      if (nextInputValue <= 0) nextInputValue = 0;
      setInputValue(nextInputValue);
    }
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const onErrorImage = (e) => {
    e.target.src = AltImage;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <StyledDonationModalWindow>
        <ModalTopBar onClose={onClose}>후원하기</ModalTopBar>
        <StyledContainer>
          <InfoWrapper>
            <StyledPreviewImage
              src={idolData.donationProfilePicture || AltImage}
              onError={onErrorImage}
            />
            <DescriptionWrapper>
              <h2>{idolData?.donationSubtitle || '서브 타이틀'}</h2>
              <h1>{idolData?.donationTitle || '메인 타이틀'}</h1>
            </DescriptionWrapper>
          </InfoWrapper>
          <InputForm onSubmit={handleSubmit}>
            <StyledCreditInput
              value={inputValue}
              onChange={handleChange}
              onKeyDown={KeyPressed}
              isError={isError}
              placeholder="크레딧 입력"
              type="number"
              step="1"
            />
            {isError && <ErrorMessage />}
            <CreditIcon />
            <Button disabled={!inputValue} onClick={handleSubmit}>
              후원하기
            </Button>
          </InputForm>
        </StyledContainer>
      </StyledDonationModalWindow>
    </Modal>
  );
}

DonationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

// styled-components

const StyledDonationModalWindow = styled(ModalWindow)`
  display: flex;
  position: fixed;
  z-index: 1000;

  width: 327px;
  height: 517px;
  gap: 24px;
`;

const StyledContainer = styled(BasedContainer)`
  gap: 30px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const StyledPreviewImage = styled.img`
  width: 158px;
  height: 206px;
  background-color: lightgray;
  object-fit: cover;

  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 40px 0px rgba(255, 255, 255, 0.1);
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  h2 {
    color: var(--white);
    opacity: 0.4;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 150% */
  }

  h1 {
    color: var(--white, #f7f7f8);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const InputForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const StyledCreditInput = styled.input`
  width: 100%;
  height: 58px;
  color: var(--white);
  background-color: #272f3d;

  padding: 16px;
  padding-right: 48px; /* 아이콘 공간 확보 */
  border-radius: 8px;
  border: 1px solid
    ${({ isError }) => (isError === true ? 'var(--error-red)' : 'var(--white)')};

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 130% */

  &::placeholder {
    color: var(--dark-gray);
  }

  &::-webkit-inner-spin-button {
    /* input[type=number] 증감 버튼 없애기 */
    appearance: none;
  }
`;

const CreditIcon = styled(StyledCreditIcon)`
  width: 30px;
  height: 30px;
  background-size: 100%;

  position: absolute;
  right: 12px;
  top: 13px;
`;

const ErrorSpan = styled.span`
  position: absolute;
  top: 67px;

  color: var(--error-red);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ErrorMessage = () => {
  return <ErrorSpan>갖고 있는 크레딧보다 더 많이 후원할 수 없어요!</ErrorSpan>;
};
