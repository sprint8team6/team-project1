import { useState } from 'react';
import { useModalContext } from '@contexts/useModalContext';
import styled from 'styled-components';
import {
  ModalBackground,
  ModalWindow,
  BasedContainer,
  StyledDivider,
} from '@styles/CommonStyles';
import ModalTopBar from '@components/Modal/ModalTopbar';
import RadioButton from '@components/RadioButton';
import Button from '@components/Button';
import CircularIdolImage from '@components/CircularIdolImage';

export default function VoteModal({ isOpen, onClose }) {
  // State
  const [selectedIdol, setSelectedIdol] = useState('0');
  const [voteIdolData, setVoteIdolData] = useState([
    {
      idolRank: 1,
      idolName: '에스파 윈터',
      idolVote: 666000,
    },
    {
      idolRank: 2,
      idolName: '두번째 아이돌',
      idolVote: 555000,
    },
    {
      idolRank: 3,
      idolName: '세번째 아이돌',
      idolVote: 444000,
    },
    {
      idolRank: 4,
      idolName: '네번째 아이돌',
      idolVote: 333000,
    },
    {
      idolRank: 5,
      idolName: '다섯번째 아이돌',
      idolVote: 222000,
    },
    {
      idolRank: 6,
      idolName: '여섯번째 아이돌',
      idolVote: 111000,
    },
  ]);

  // Context
  const { openModal } = useModalContext();

  if (!isOpen) return null;

  const handleOptionChange = (idolRank) => {
    const nextSelectedIdol = idolRank;
    setSelectedIdol(nextSelectedIdol);
  };

  return (
    <ModalBackground>
      <StyledVoteModalWindow>
        <ModalTopBar onClose={onClose}>이달의 여자 아이돌</ModalTopBar>
        <StyledVoteOptionList>
          {voteIdolData.map((idolData) => (
            <>
              <VoteOption
                key={
                  idolData.idolRank
                } /** @todo 아이돌의 고유값으로 바꿔야 함 */
                onClick={handleOptionChange}
                selectedIdol={selectedIdol}
                idolData={idolData}
              />
              <StyledDivider />
            </>
          ))}
        </StyledVoteOptionList>
        <VoteButton
          onClose={onClose}
          openError={() =>
            openModal('PopupModal', {
              message: (
                <span>
                  앗! 투표하기 위한 <em>크레딧</em>이 부족해요!
                </span>
              ),
            })
          }
        >
          투표하기
        </VoteButton>
        <StyledVoteNotify>
          <span>
            투표하는 데 <em>1000 크레딧</em>이 소모됩니다.
          </span>
        </StyledVoteNotify>
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

const StyledVoteOptionList = styled(BasedContainer)`
  display: flex;
  width: 477px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  cursor: pointer;
`;

const StyledVoteOption = styled.div`
  display: flex;
  width: 477px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

const StyledIdolInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledIdolNameAndVotes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const StyledRank = styled.span`
  color: var(--brand-orange_F96D69, #f96d69);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledName = styled.span`
  color: var(--white-white_FFFFFF, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StyledVotes = styled.span`
  color: rgba(255, 255, 255, 0.6);
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const VoteOption = ({ onClick, selectedIdol, idolData }) => {
  return (
    <StyledVoteOption onClick={() => onClick(idolData.idolRank)}>
      <StyledIdolInfo>
        <CircularIdolImage isChecked={selectedIdol === idolData.idolRank} />
        <StyledRank>{idolData.idolRank}</StyledRank>
        <StyledIdolNameAndVotes>
          <StyledName>{idolData.idolName}</StyledName>
          <StyledVotes>{idolData.idolVote.toLocaleString()} 표</StyledVotes>
        </StyledIdolNameAndVotes>
      </StyledIdolInfo>
      <RadioButton isChecked={selectedIdol === idolData.idolRank} />
    </StyledVoteOption>
  );
};

const VoteButton = ({ onClose, openError, children }) => {
  const submitVote = () => {
    if (999 < 1000) {
      openError();
    } else {
      /** @todo Credit 1000 사용하는 로직 */
      /** @todo 선택한 여자 아이돌에게 Vote 되는 로직 */
      onClose();
    }
  };

  return <Button onClick={submitVote}>{children}</Button>;
};

const StyledVoteNotify = styled.div`
  position: relative;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10px;

  span {
    color: var(--white-white_FFFFFF, #fff);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 216.667% */
  }
`;
