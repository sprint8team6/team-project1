import styled from 'styled-components';

export default function MonthChartTab() {
  return (
    <ChartTab>
      <ChartTabBtn on type="button">
        이달의 여자 아이돌
      </ChartTabBtn>
      <ChartTabBtn type="button">이달의 남자 아이돌</ChartTabBtn>
    </ChartTab>
  );
}

const ChartTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const ChartTabBtn = styled.button`
  width: 100%;
  height: 42px;
  border: none;
  border-bottom: 1px solid ${(props) => (props.on ? '#ffffff' : '#000000')};
  color: ${(props) => (props.on ? '#ffffff' : 'var(--medium-gray)')};
  background-color: ${(props) => (props.on ? 'var(--light-black)' : '#000000')};
`;
