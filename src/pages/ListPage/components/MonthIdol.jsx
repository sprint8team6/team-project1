import { PropTypes } from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
// component
import CircularIdolImage from '@components/CircularIdolImage';
import defaultImage from '@assets/png/alt_image.png';

export default function MonthIdol({ idolsData }) {
  const [monthIdolText, setMonthIdolText] = useState({
    idolsDataName: idolsData ? idolsData.name : '-',
    idolsDataGroup: idolsData ? idolsData.group : '-',
    idolsDataRank: idolsData ? idolsData.rank : 0,
    idolsDataProfilePicture: idolsData
      ? idolsData.profilePicture
      : defaultImage,
    idolsDataTotalVotes: idolsData ? idolsData.totalVotes : 0,
  });

  return (
    <ChartIdolGrid>
      <CircularIdolImage idolImage={monthIdolText.idolsDataProfilePicture} />
      <ChartIdolRank>{monthIdolText.idolsDataRank}</ChartIdolRank>
      <ChartIdolName>
        {monthIdolText.idolsDataGroup} {monthIdolText.idolsDataName}
      </ChartIdolName>
      <ChartIdolVote>
        {monthIdolText.idolsDataTotalVotes.toLocaleString()} 표
      </ChartIdolVote>
    </ChartIdolGrid>
  );
}

MonthIdol.propTypes = {
  idolsData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    group: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    profilePicture: PropTypes.string.isRequired,
    totalVotes: PropTypes.number.isRequired,
  }).isRequired,
};

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
