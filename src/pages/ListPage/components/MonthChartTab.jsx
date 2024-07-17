import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function MonthChartTab({ tabOn, setTabOn }) {
  const GENDER_GIRL = 'girl';
  const GENDER_BOY = 'boy';

  const handleClickTab = (gender) => {
    if (gender === GENDER_GIRL) {
      setTabOn({ girlTab: true, boyTab: false });
    } else if (gender === GENDER_BOY) {
      setTabOn({ girlTab: false, boyTab: true });
    }
  };

  return (
    <ChartTab>
      <ChartTabButton
        className={tabOn.girlTab ? 'on' : ''}
        type="button"
        onClick={() => {
          handleClickTab(GENDER_GIRL);
        }}
      >
        이달의 여자 아이돌
      </ChartTabButton>
      <ChartTabButton
        className={tabOn.boyTab ? 'on' : ''}
        type="button"
        onClick={() => {
          handleClickTab(GENDER_BOY);
        }}
      >
        이달의 남자 아이돌
      </ChartTabButton>
    </ChartTab>
  );
}

MonthChartTab.propTypes = {
  tabOn: PropTypes.shape({
    girlTab: PropTypes.bool.isRequired,
    boyTab: PropTypes.bool.isRequired,
  }).isRequired,
  setTabOn: PropTypes.func.isRequired,
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
