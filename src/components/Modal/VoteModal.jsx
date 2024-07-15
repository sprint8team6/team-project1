import { useState } from 'react';
import { useModalContext } from '@contexts/ModalContext';
import styled from 'styled-components';
import {
  ModalBackground,
  ModalWindow,
  BasedContainer,
} from '@styles/CommonStyles';
import ModalTopBar from '@components/Modal/ModalTopbar';
import RadioButton from '@components/RadioButton';
import Button from '@components/Button';

export default function VoteModal({ isOpen, onClose }) {
  // State
  const [selectedIdol, setSelectedIdol] = useState('0');

  // Context
  const { openModal } = useModalContext();

  return (
    <ModalBackground>
      <StyledVoteModalWindow>
        <ModalTopBar onClose={onClose}>이달의 여자 아이돌</ModalTopBar>
        <StyledContainer>내용</StyledContainer>
        <VoteButton
          onClose={onClose}
          openError={() => openModal('PopupModal', '투표')}
        >
          투표하기
        </VoteButton>
      </StyledVoteModalWindow>
    </ModalBackground>
  );
}

// styled-components

const StyledVoteModalWindow = styled(ModalWindow)`
  display: flex;
  position: fixed;
  z-index: 1000;
  width: 525px;
  height: 693px;
  gap: 20px;
`;

const StyledContainer = styled(BasedContainer)`
  gap: 24px;
`;

const VoteButton = ({ onClose, openError }) => {
  const submitVote = () => {
    if (999 < 1000) {
      openError();
    } else {
      /** @todo Credit 1000 사용하는 로직 */
      /** @todo 선택한 여자 아이돌에게 Vote 되는 로직 */
      onClose();
    }
  };

  return <Button onClick={submitVote}>투표하기</Button>;
};
