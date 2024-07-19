import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useModalContext } from '@contexts/useModalContext';
import { useCreditContext } from '@contexts/useCreditContext';
// Components
import { BasedContainer, StyledDivider } from '@styles/CommonStyles';
import Modal, { ModalWindow } from '@components/Modal/Modal';
import ModalTopBar from '@components/Modal/ModalTopbar';
import CircularIdolImage from '@components/CircularIdolImage';
import RadioButton from '@components/RadioButton';
import Button from '@components/Button';
// APIs
import { getCharts, postVote } from '@apis/idolApi';
import LoadingSpinner from '@components/LoadingSpinner';

/** 투표 모달 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {boolean} props.isOpen - 모달이 열려 있는지 여부
 * @param {function} props.onClose - 모달을 닫기 위한 함수
 * @return {JSX.Element} 투표 모달 컴포넌트
 */
export default function VoteModal({ isOpen = false, onClose }) {
  // State
  const [selectedIdol, setSelectedIdol] = useState(); // [type=number] (idolId 저장)
  const [voteIdolData, setVoteIdolData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Context
  const { modals, openModal } = useModalContext();
  const selectedTab =
    modals.VoteModal.data.girlTab === true ? 'female' : 'male';
  const { myCredit, setMyCredit } = useCreditContext();

  const handleOptionChange = (idolId) => {
    const nextSelectedIdol = idolId;
    setSelectedIdol(nextSelectedIdol);
  };

  // 마운트될 때,
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getCharts({ gender: selectedTab, pageSize: 6 });
        setVoteIdolData(data.idols);
      } catch (error) {
        console.error('Failed to fetch charts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Modal isOpen={isOpen}>
      <StyledVoteModalWindow>
        <ModalTopBar onClose={onClose}>이달의 여자 아이돌</ModalTopBar>
        <LoadingSpinner isLoading={isLoading} />
        <StyledVoteOptionList>
          {voteIdolData.map((idolData) => (
            <>
              <VoteOption
                key={`idol-id-${idolData.id}`}
                onClick={
                  localStorage.getItem('hasVoted')
                    ? () => {}
                    : handleOptionChange
                }
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
          selectedIdol={selectedIdol}
          myCredit={myCredit}
          setMyCredit={setMyCredit}
        >
          {!localStorage.getItem('hasVoted')
            ? '투표하기'
            : '이미 차트에 투표했어요'}
        </VoteButton>

        <StyledVoteNotify>
          {!localStorage.getItem('hasVoted') ? (
            <span>
              투표하는 데 <em>1000 크레딧</em>이 소모됩니다.
            </span>
          ) : (
            <span>
              <em>다음 투표</em>까지 기다려주세요!
            </span>
          )}
        </StyledVoteNotify>
      </StyledVoteModalWindow>
    </Modal>
  );
}

VoteModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

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
  width: 477px;
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
  color: var(--brand-coral, #f96d69);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledName = styled.span`
  color: var(--white, #fff);
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
    <StyledVoteOption onClick={() => onClick(idolData?.id)}>
      <StyledIdolInfo>
        <CircularIdolImage
          idolImage={idolData?.profilePicture}
          isChecked={selectedIdol === idolData?.id}
        />
        <StyledRank>{idolData?.rank}</StyledRank>
        <StyledIdolNameAndVotes>
          <StyledName>{idolData?.name}</StyledName>
          <StyledVotes>{idolData?.totalVotes?.toLocaleString()} 표</StyledVotes>
        </StyledIdolNameAndVotes>
      </StyledIdolInfo>
      {!localStorage.getItem('hasVoted') && (
        <RadioButton checked={selectedIdol === idolData?.id} />
      )}
    </StyledVoteOption>
  );
};

VoteOption.propTypes = {
  onClick: PropTypes.func.isRequired,
  /** @todo 추후에 State로 Key 변경할 경우 selectedIdol PropTypes 변동 가능성 있음 */
  selectedIdol: PropTypes.number.isRequired,
  idolData: PropTypes.shape({
    profilePicture: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rank: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalVotes: PropTypes.number.isRequired,
  }).isRequired,
};

const VoteButton = ({
  onClose,
  openError,
  selectedIdol,
  myCredit,
  setMyCredit,
  children,
}) => {
  const submitVote = () => {
    if (myCredit < 1000) {
      openError();
    } else {
      try {
        postVote({ idolId: selectedIdol });
        setMyCredit(myCredit - 1000);
        localStorage.setItem('hasVoted', true);
      } catch (error) {
        console.error('Failed to vote idol:', error);
      } finally {
        onClose();
      }
    }
  };

  return (
    <Button onClick={submitVote} disabled={localStorage.getItem('hasVoted')}>
      {children}
    </Button>
  );
};

VoteButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  openError: PropTypes.func.isRequired,
  selectedIdol: PropTypes.number.isRequired,
  myCredit: PropTypes.number.isRequired,
  setMyCredit: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const StyledVoteNotify = styled.div`
  position: relative;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10px;

  span {
    color: var(--white, #fff);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 216.667% */
  }
`;
