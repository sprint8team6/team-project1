import { PropTypes } from 'prop-types';
import styled from 'styled-components';
// component
import Button from '@components/Button';
import MonthIdol from './MonthIdol';

export default function MonthChartList({
  chartIdolData,
  handleClickDataReload,
}) {
  return (
    <MonthIdolList className={chartIdolData.length > 0 ? '' : 'error'}>
      {chartIdolData.length > 0 ? (
        chartIdolData.map((idolsData) => {
          return <MonthIdol key={idolsData.id} idolsData={idolsData} />;
        })
      ) : (
        <ErrorMessage>
          데이터를 불러오는데 실패했습니다.
          <br />
          <Button type="button" onClick={handleClickDataReload}>
            데이터 다시 불러오기
          </Button>
        </ErrorMessage>
      )}
    </MonthIdolList>
  );
}

MonthChartList.propTypes = {
  chartIdolData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      group: PropTypes.string,
      profilePicture: PropTypes.string,
      totalVotes: PropTypes.number,
      rank: PropTypes.number,
    })
  ).isRequired,
  handleClickDataReload: PropTypes.func.isRequired,
};

const MonthIdolList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 24px;
  margin-bottom: 50px;

  &.error {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 744px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 375px) {
    margin-bottom: 33px;
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: var(--brand-coral);

  button {
    max-width: 200px;
    margin-top: 20px;
  }

  @media screen and (max-width: 744px) {
    font-size: 22px;
  }
`;
