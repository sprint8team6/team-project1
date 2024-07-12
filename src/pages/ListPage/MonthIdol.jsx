import styled from 'styled-components';
import MonthIdolImg from './MonthIdolImg';

export default function MonthIdol() {
  return (
    <ChartIdolGrid>
      <MonthIdolImg />
      <ChartIdolRank>1</ChartIdolRank>
      <ChartIdolName>에스파 윈터</ChartIdolName>
      <ChartIdolVote>999,999 표</ChartIdolVote>
    </ChartIdolGrid>
  );
}

const ChartIdolGrid = styled.div`
  display: grid;
  grid-template-columns: 70px 0.5fr 7fr 2.5fr;
  align-items: center;
  gap: 5px;
  width: 100%;
  border-top: 1px solid var(--light-black);
  padding: 8px 0;

  &:nth-child(-n + 2) {
    border: none;
  }
`;

const ChartIdolRank = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  text-align: center;
  color: var(--brand-coral);
`;

const ChartIdolName = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: left;
  color: rgba(255, 255, 255, 0.87);
`;

const ChartIdolVote = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  text-align: right;
  color: rgba(255, 255, 255, 0.6);
`;
