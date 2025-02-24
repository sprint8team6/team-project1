import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
// api
import { getCharts } from '@apis/idolApi';
// spinner
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [genderTab, setGenderTab] = useState(FEMALE);
  const [chartPageSize, setChartPageSize] = useState(
    windowWidth >= 744 ? PAGE_SIZE : 5
  );
  const [chartIdolData, setChartIdolData] = useState([]);
  const [nextCursorValue, setNextCursorValue] = useState(0);
  const [moreButtonDisabled, setMoreButtonDisabled] = useState(false);
  const [allButtonDisabled, setAllButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dataReload, setDataReload] = useState(true);

  // 더보기 버튼 클릭
  const handleClickMoreButton = () => {
    if (windowWidth <= 744) {
      setChartPageSize(chartPageSize + 5);
    } else {
      setChartPageSize(chartPageSize + 10);
    }
  };

  // 접기 버튼 클릭
  const handleClickShortButton = () => {
    if (windowWidth <= 744) {
      setChartPageSize(5);
    } else {
      setChartPageSize(10);
    }
  };

  // 브라우저 사이즈 변경되면 현재 사이즈 반환
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  // 반응형으로 차트 노출 개수 정하기
  useEffect(() => {
    if (windowWidth <= 744) {
      setChartPageSize(5);
    } else if (windowWidth > 744) {
      setChartPageSize(10);
    }
  }, [windowWidth]);

  // nextCursor값 가져오기
  useEffect(() => {
    const handleLoad = async () => {
      try {
        const { idols, nextCursor } = await getCharts({
          gender: genderTab,
          pageSize: chartPageSize,
          cursor: 0,
        });

        setChartIdolData(idols);
        setNextCursorValue(nextCursor);
        setIsLoading(false);
        setAllButtonDisabled(true);
      } catch (error) {
        console.error(error);
        setAllButtonDisabled(false);
      } finally {
        setIsLoading(false);
      }
    };

    handleLoad();
  }, [genderTab, chartPageSize, dataReload]);

  const handleClickDataReload = () => {
    setDataReload(!dataReload);
  };

  // nextCursor값이 null로 더는 불러올 아이돌 데이터가 없으면 더보기 버튼 숨기고 접기 버튼 노출
  useEffect(() => {
    if (nextCursorValue === null) {
      setMoreButtonDisabled(true);
    } else {
      setMoreButtonDisabled(false);
    }
  }, [nextCursorValue]);

  // 페이지 처음 로드할 때 불러온 차트내용이 전부이면 더보기 버튼 안보이게 하기
  useEffect(() => {
    if (nextCursorValue === null) {
      setAllButtonDisabled(false);
    } else {
      setAllButtonDisabled(true);
    }
  }, []);

  if (isLoading) {
    return (
      <LoadingSpinner
        isLoading={isLoading}
        color="var(--brand-coral)"
        size={20}
        width="100%"
        height="100%"
        minLoadTime={1000}
      />
    );
  }

  return (
    <MyCreditWrap>
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
        windowWidth={windowWidth}
      />
      <MonthChartList
        chartIdolData={chartIdolData}
        handleClickDataReload={() => handleClickDataReload()}
      />
      {allButtonDisabled ? (
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
      ) : (
        ''
      )}
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
