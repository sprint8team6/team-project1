import { useState } from 'react';
import styled from 'styled-components';

export default function MonthChartTab({ setIdolGender }) {
  const GENDER_GIRL = 'girl';
  const GENDER_BOY = 'boy';

  const [tabOn, setTabOn] = useState({
    girlTab: true,
    boyTab: false,
  });

  const handleClickTab = (gender) => {
    if (gender === GENDER_GIRL) {
      setIdolGender(GENDER_GIRL);
      setTabOn({ girlTab: true, boyTab: false });
    } else if (gender === GENDER_BOY) {
      setIdolGender(GENDER_BOY);
      setTabOn({ girlTab: false, boyTab: true });
    }
  };
  return (
    <ChartTab>
      <ChartTabButton
        active={tabOn.girlTab}
        type="button"
        onClick={() => {
          handleClickTab(GENDER_GIRL);
        }}
      >
        이달의 여자 아이돌
      </ChartTabButton>
      <ChartTabButton
        active={tabOn.boyTab}
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
  border-bottom: 1px solid ${(props) => (props.active ? '#ffffff' : '#000000')};
  color: ${(props) => (props.active ? '#ffffff' : 'var(--medium-gray)')};
  background-color: ${(props) =>
    props.active ? 'var(--light-black)' : '#000000'};
`;
