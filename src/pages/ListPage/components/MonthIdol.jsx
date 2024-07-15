import styled from 'styled-components';
import { useState } from 'react';
import CircularIdolImg from '@components/CircularIdolImage';

export default function MonthIdol() {
  const [monthIdolText, setMonthIdolText] = useState({
    idolRank: 1,
    idolName: '에스파 윈터',
    idolVote: 999999,
  });
  return (
    <ChartIdolGrid>
      <CircularIdolImg />
      <ChartIdolRank>{monthIdolText.idolRank}</ChartIdolRank>
      <ChartIdolName>{monthIdolText.idolName}</ChartIdolName>
      <ChartIdolVote>
        {monthIdolText.idolVote.toLocaleString()} 표
      </ChartIdolVote>
    </ChartIdolGrid>
  );
}

const ChartIdolGrid = styled.div`
  display: grid;
  grid-template-columns: 70px 0.5fr 5.5fr 4fr;
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

  @media screen and (max-width: 744px) {
    font-size: 1.4rem;
  }
`;

const ChartIdolName = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: left;
  color: rgba(255, 255, 255, 0.87);

  @media screen and (max-width: 744px) {
    font-size: 1.4rem;
  }
`;

const ChartIdolVote = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  text-align: right;
  color: rgba(255, 255, 255, 0.6);

  @media screen and (max-width: 744px) {
    font-size: 1.4rem;
  }
`;
