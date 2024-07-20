import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCharts } from '@apis/idolApi';
import LoadingSpinner from '@components/LoadingSpinner';
// component
import Button from '@components/Button';
import ChartButtonImage from '@assets/svg/ic_chart.svg';
import MonthChartTab from './MonthChartTab';
import MonthChartList from './MonthChartList';

export default function MonthChart({ openModal }) {
  const FEMALE = 'female';
  const MALE = 'male';
  const PAGE_SIZE = 10;
  const [genderTab, setGenderTab] = useState(FEMALE);
  const [chartPageSize, setChartPageSize] = useState(PAGE_SIZE);
  const [nextCursorValue, setNextCursorValue] = useState();
  const [moreButtonDisabled, setMoreButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleClickMoreButton = () => {
    setChartPageSize(chartPageSize + 10);
  };

  const handleClickShortButton = () => {
    setChartPageSize(10);
  };

  useEffect(() => {
    const handleLoad = async () => {
      try {
        const { nextCursor } = await getCharts({
          gender: genderTab,
          pageSize: chartPageSize,
          cursor: 0,
        });
        setNextCursorValue(nextCursor);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    handleLoad();
  }, [chartPageSize]);

  useEffect(() => {
    if (nextCursorValue === null) {
      setMoreButtonDisabled(true);
    } else {
      setMoreButtonDisabled(false);
    }
  }, [nextCursorValue, chartPageSize]);

  return (
    <MyCreditWrap>
      <LoadingSpinner
        isLoading={isLoading}
        color="var(--brand-coral)"
        size={20}
        width="100%"
        height="100%"
        minLoadTime={1000}
      />
      <div>
        <ListPageSubTitle>
          <h2>이달의 차트</h2>
          <Button onClick={() => openModal('VoteModal', genderTab)}>
            <img src={ChartButtonImage} alt="차트 이미지" />
            차트 투표하기
          </Button>
        </ListPageSubTitle>
      </div>
      <MonthChartTab
        genderTab={genderTab}
        setGenderTab={setGenderTab}
        setChartPageSize={setChartPageSize}
      />
      <MonthChartList
        idolGender={genderTab === 'female' ? FEMALE : MALE}
        chartPageSize={chartPageSize}
      />
      <ChartMoreButton>
        <button
          type="button"
          onClick={() => {
            handleClickMoreButton();
          }}
          className={moreButtonDisabled ? 'none' : ''}
        >
          더보기
        </button>
        <button
          type="button"
          onClick={() => {
            handleClickShortButton();
          }}
          className={moreButtonDisabled ? '' : 'none'}
        >
          접기
        </button>
      </ChartMoreButton>
    </MyCreditWrap>
  );
}

MonthChart.propTypes = {
  openModal: PropTypes.func.isRequired,
};

const MyCreditWrap = styled.section`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0 20px;
  color: #ffffff;
`;

const ListPageSubTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  @media screen and (max-width: 744px) {
    margin-bottom: 24px;
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 16px;
  }

  & > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: var(--white);

    @media screen and (max-width: 744px) {
      font-size: 2rem;
      padding: 0;
    }

    @media screen and (max-width: 375px) {
      font-size: 1.6rem;
    }
  }

  & button {
    padding: 16px 0;
    width: 130px;
    height: 32px;
    font-size: 1.3rem;

    & > img {
      width: 24px;
      height: 24px;
      margin-right: 5px;
    }
  }
`;

const ChartMoreButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > button {
    width: 326px;
    height: 42px;
    border: 1px solid var(--white);
    border-radius: 3px;
    color: var(--white);
    background-color: var(--light-black);

    &.none {
      display: none;
    }
  }
`;
