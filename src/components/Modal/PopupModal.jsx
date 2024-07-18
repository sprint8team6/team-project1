import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useModalContext } from '@contexts/useModalContext';
import { BasedContainer } from '@styles/CommonStyles';
import Modal, { ModalWindow } from '@components/Modal/Modal';
import ModalTopBar from '@components/Modal/ModalTopbar';
import Button from '@components/Button';
// assets
import CreditImage from '@assets/svg/ic_credit.svg';

/** 팝업 모달 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {boolean} props.isOpen - 모달이 열려 있는지 여부
 * @param {function} props.onClose - 모달을 닫기 위한 함수
 * @return {JSX.Element} 팝업 모달 컴포넌트
 */
export default function PopupModal({ isOpen = false, onClose }) {
  // Context
  const { modals } = useModalContext();

  return (
    <Modal isOpen={isOpen}>
      <StyledPopupWindow>
        <ModalTopBar onClose={onClose} />
        <StyledContainer>
          <StyledCreditDiv />
          <PopupLabel Description={modals?.PopupModal.data.message} />
          <Button onClick={onClose}>확인</Button>
        </StyledContainer>
      </StyledPopupWindow>
    </Modal>
  );
}

PopupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

// styled-components

const StyledPopupWindow = styled(ModalWindow)`
  display: flex;
  position: fixed;
  z-index: 2000;

  width: 339px;
  height: 331px;

  background-image: url(${CreditImage});
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center top 12px;
`;

const StyledContainer = styled(BasedContainer)`
  gap: 24px;

  span {
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
  return <span>{Description}</span>;
};

PopupLabel.propTypes = {
  Description: PropTypes.node,
};
