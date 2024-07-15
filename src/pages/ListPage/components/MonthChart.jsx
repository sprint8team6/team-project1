import styled from 'styled-components';
import { useModalContext } from '@contexts/useModalContext';
import Button from '@components/Button';
import ChartImage from '@assets/svg/ic_chart.svg';
import MonthChartTab from './MonthChartTab';
import MonthIdol from './MonthIdol';

export default function MonthChart() {
  // Context
  const { openModal } = useModalContext();

  return (
    <MyCreditWrap>
      <div>
        <ListPageSubTitle>
          <h2>이달의 차트</h2>
          <Button onClick={() => openModal('VoteModal', null)}>
            <img src={ChartImage} alt="차트 이미지" />
            차트 투표하기
          </Button>
        </ListPageSubTitle>
      </div>
      <MonthChartTab />
      <MonthIdolList>
        <MonthIdol />
        <MonthIdol />
        <MonthIdol />
        <MonthIdol />
        <MonthIdol />
        <MonthIdol />
        <MonthIdol />
        <MonthIdol />
        <MonthIdol />
        <MonthIdol />
      </MonthIdolList>
      <ChartMoreButton>
        <button type="button">더보기</button>
      </ChartMoreButton>
    </MyCreditWrap>
  );
}

const MyCreditWrap = styled.section`
  width: 100%;
  max-width: 1200px;
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

const MonthIdolList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 24px;
  margin-bottom: 50px;

  @media screen and (max-width: 744px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 33px;
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
  }
`;
