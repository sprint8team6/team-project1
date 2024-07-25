/* eslint-disable no-console */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { useModalContext } from '@contexts/useModalContext';
import { useCreditContext } from '@contexts/useCreditContext';
import { useToastContext } from '@contexts/useToastContext';
// Components
import {
  BasedContainer,
  LeftTopGradientDesign,
  StyledCreditIcon,
  StyledDivider,
} from '@styles/CommonStyles';
import Modal, { ModalWindow } from '@components/Modal/Modal';
import ModalTopBar, { MobileTopBar } from '@components/Modal/ModalTopbar';
import CircularIdolImage from '@components/CircularIdolImage';
import RadioButton from '@components/RadioButton';
import Button from '@components/Button';
// APIs
import { getCharts, postVote } from '@apis/idolApi';
import LoadingSpinner from '@components/LoadingSpinner';

function getResponsiveValue() {
  const width = window.innerWidth;
  return width > 480 ? 'PC' : 'MOBILE';
}

/** 투표 모달 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {boolean} props.isOpen - 모달이 열려 있는지 여부
 * @param {function} props.onClose - 모달을 닫기 위한 함수
 * @return {JSX.Element} 투표 모달 컴포넌트
 */
export default function VoteModal({ isOpen = false, onClose }) {
  // State
  const [selectedIdol, setSelectedIdol] = useState(0); // [type=number] (idolId 저장)
  const [voteIdolData, setVoteIdolData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [responsiveStatus, setResponsiveStatus] = useState(10);
  const [isError, setIsError] = useState(false);
  const [nowCursor, setNowCursor] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Context
  const { modals, openModal } = useModalContext();
  const selectedTab = modals.VoteModal.data;
  const { myCredit, setMyCredit } = useCreditContext();
  const { addToast } = useToastContext();

  // Ref
  const listRef = useRef(null);

  const handleOptionChange = (idolId) => {
    const nextSelectedIdol = idolId;
    setSelectedIdol(nextSelectedIdol);
  };

  const fetchData = async () => {
    if (isLoading === true || nowCursor === null) {
      return;
    }
    setIsLoading(true);
    setIsError(false);
    try {
      const data = await getCharts({
        gender: selectedTab,
        pageSize: 10,
        cursor: nowCursor,
      });
      setNowCursor(data.nextCursor);
      setVoteIdolData((prevData) => {
        let currentRank =
          prevData.length > 0 ? prevData[prevData.length - 1].rank : 0;
        let previousVotes =
          prevData.length > 0 ? prevData[prevData.length - 1].totalVotes : null;
        let offset = 0; // 공동 순위 발생 시 건너뛸 순위를 추적하기 위한 변수

        const updatedIdols = data.idols.map((idolsData, index) => {
          // 이전 아이돌과 총 투표 수가 동일한 경우
          if (
            previousVotes !== null &&
            idolsData.totalVotes === previousVotes
          ) {
            offset += 1; // 공동 순위 발생 시 offset 증가
            return {
              ...idolsData,
              rank: currentRank, // 동일한 순위 부여
            };
          }

          // 새로운 순위를 할당할 때 currentRank를 1 증가시키고 offset을 더함
          currentRank += 1 + offset;
          previousVotes = idolsData.totalVotes;
          offset = 0; // 새로운 순위가 할당된 후 offset을 0으로 리셋
          return {
            ...idolsData,
            rank: currentRank,
          };
        });

        return [...prevData, ...updatedIdols];
      });
    } catch (error) {
      console.error('Failed to fetch charts:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const submitVote = () => {
    if (myCredit < 1000) {
      openModal('PopupModal', {
        message: (
          <span>
            앗! 투표하기 위한 <em>크레딧</em>이 부족해요!
          </span>
        ),
      });
    } else {
      try {
        postVote({ idolId: selectedIdol });
        setMyCredit(myCredit - 1000);
        localStorage.setItem('hasVoted', true);
        addToast(
          <span>
            <em>투표</em>를 완료했습니다!
          </span>
        );
      } catch (error) {
        console.error('Failed to vote idol:', error);
      } finally {
        onClose();
      }
    }
  };

  useEffect(() => {
    setIsMounted(true);
    setResponsiveStatus(getResponsiveValue());
  }, []);

  useEffect(() => {
    if (isMounted) {
      fetchData();
    }
  }, [selectedTab, isMounted]);

  useEffect(() => {
    const listElement = listRef.current;
    const SCROLL_THRESHOLD = 10; // 오차 허용 범위

    if (listElement) {
      const handleScroll = () => {
        if (isLoading || nowCursor === null) {
          return;
        }
        // 스크롤을 끝까지 내릴 경우
        if (
          Math.abs(
            listElement.scrollHeight -
              listElement.scrollTop -
              listElement.clientHeight
          ) <= SCROLL_THRESHOLD
        ) {
          fetchData();
        }
      };

      listElement.addEventListener('scroll', handleScroll);

      // Cleanup Function
      return () => {
        listElement.removeEventListener('scroll', handleScroll);
      };
    }

    // 반환 값 추가하여 ESLint 경고 해결
    return undefined;
  }, [isLoading, nowCursor, voteIdolData]);

  // 화면 크기 변경 시, responsiveStatus 재계산
  useEffect(() => {
    const handleResize = () => {
      setResponsiveStatus(getResponsiveValue());
    };
    window.addEventListener('resize', handleResize);
    // Cleanup Function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [responsiveStatus]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <StyledVoteModalWindow>
        {responsiveStatus === 'PC' ? (
          <ModalTopBar onClose={onClose}>
            이달의 {selectedTab === 'female' ? '여자' : '남자'} 아이돌
          </ModalTopBar>
        ) : (
          <>
            <LeftTopGradientDesign />
            <MobileTopBar onClose={onClose}>
              이달의 {selectedTab === 'female' ? '여자' : '남자'} 아이돌
            </MobileTopBar>
          </>
        )}
        <LoadingSpinner isLoading={isLoading} />
        {isError ? (
          <ErrorMessage>
            서버 에러가 발생했습니다. 나중에 다시 시도해 주세요.
          </ErrorMessage>
        ) : (
          <StyledVoteOptionList ref={listRef}>
            {voteIdolData.map((idolData) => (
              <React.Fragment key={`idol-id-${idolData.id}`}>
                <VoteOption
                  key={`idol-id-${idolData.id}`}
                  onClick={
                    localStorage.getItem('hasVoted')
                      ? () => {}
                      : handleOptionChange
                  }
                  selectedIdol={selectedIdol}
                  idolData={idolData}
                  disabled={Boolean(localStorage.getItem('hasVoted'))}
                />
                <StyledDivider key={`divider-${idolData.id}`} />
              </React.Fragment>
            ))}
          </StyledVoteOptionList>
        )}
        <StyledDiv>
          <VoteButton onClose={onClose} submitVote={submitVote}>
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
        </StyledDiv>
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
  width: 480px;
  height: 710px;
  gap: 16px;

  @media screen and (max-width: 480px) {
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--dark-black);
    padding: 8px 24px;
  }
`;

const ErrorMessage = styled.div`
  color: var(--brand-coral);
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`;

const StyledVoteOptionList = styled(BasedContainer)`
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  overflow-y: auto;
  flex-grow: 1;
  padding-top: 8px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: linear-gradient(
      60deg,
      rgba(249, 110, 104, 0.8),
      var(--brand-coral) 20%,
      var(--brand-pink) 80%,
      rgba(254, 87, 143, 0.8)
    );
  }

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    display: flex;
    background: var(--dark-black);
  }
`;

const StyledVoteOption = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding-right: 20px;
  cursor: ${(props) => (props.disabled === 'true' ? 'default' : 'pointer')};

  @media screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    background: var(--dark-black);
  }
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
  display: inline-block;
  width: 16px;
  text-align: center;
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

const VoteOption = ({ onClick, selectedIdol, idolData, disabled }) => {
  return (
    <StyledVoteOption onClick={() => onClick(idolData?.id)} disabled={disabled}>
      <StyledIdolInfo>
        <CircularIdolImage
          idolImage={idolData?.profilePicture}
          isChecked={selectedIdol === idolData?.id}
        />
        <StyledRank>
          {idolData.totalVotes === 0 ? '-' : idolData?.rank}
        </StyledRank>
        <StyledIdolNameAndVotes>
          <StyledName>{`${idolData?.group} ${idolData?.name}`}</StyledName>
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
  selectedIdol: PropTypes.number.isRequired,
  idolData: PropTypes.shape({
    profilePicture: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rank: PropTypes.number.isRequired,
    group: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    totalVotes: PropTypes.number.isRequired,
  }).isRequired,
  disabled: PropTypes.bool,
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const VoteButton = ({ submitVote, children }) => {
  return (
    <Button
      onClick={submitVote}
      disabled={localStorage.getItem('hasVoted') === 'true'}
    >
      {children}
    </Button>
  );
};

VoteButton.propTypes = {
  submitVote: PropTypes.func.isRequired,
  children: PropTypes.node,
};

const StyledVoteNotify = styled.div`
  position: relative;
  top: 10px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    top: 0.25rem;
  }

  span {
    color: var(--white, #fff);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 216.667% */
  }
`;
