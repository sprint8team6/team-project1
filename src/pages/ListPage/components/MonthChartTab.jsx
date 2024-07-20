import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function MonthChartTab({
  genderTab,
  setGenderTab,
  setChartPageSize,
}) {
  const FEMALE = 'female';
  const MALE = 'male';

  const handleClickTab = (gender) => {
    if (gender === FEMALE) {
      setGenderTab(FEMALE);
      setChartPageSize(10);
    } else if (gender === MALE) {
      setGenderTab(MALE);
      setChartPageSize(10);
    }
  };

  return (
    <ChartTab>
      <ChartTabButton
        className={genderTab === 'female' ? 'on' : ''}
        type="button"
        onClick={() => {
          handleClickTab(FEMALE);
        }}
      >
        이달의 여자 아이돌
      </ChartTabButton>
      <ChartTabButton
        className={genderTab === 'male' ? 'on' : ''}
        type="button"
        onClick={() => {
          handleClickTab(MALE);
        }}
      >
        이달의 남자 아이돌
      </ChartTabButton>
    </ChartTab>
  );
}

MonthChartTab.propTypes = {
  genderTab: PropTypes.string.isRequired,
  setGenderTab: PropTypes.func.isRequired,
  setChartPageSize: PropTypes.func.isRequired,
};

const ChartTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 375px) {
    margin-bottom: 16px;
  }
`;

const ChartTabButton = styled.button`
  width: 100%;
  height: 42px;
  border: none;
  border-bottom: 1px solid #000000;
  color: var(--medium-gray);
  background-color: #000000;

  &.on {
    border-bottom: 1px solid #ffffff;
    color: #ffffff;
    background-color: var(--light-black);
  }
`;
