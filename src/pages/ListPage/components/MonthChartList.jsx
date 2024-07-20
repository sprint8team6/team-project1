import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
// api
import { getCharts } from '@apis/idolApi';
// component
import MonthIdol from './MonthIdol';

export default function MonthChartList({ idolGender, chartPageSize }) {
  const [chartIdolsData, setChartIdolsData] = useState([]);

  useEffect(() => {
    const handleLoad = async (option) => {
      try {
        const { idols } = await getCharts(option);
        setChartIdolsData(idols);
      } catch (error) {
        console.error(error);
      }
    };

    handleLoad({ gender: idolGender, pageSize: chartPageSize, cursor: 0 });
  }, [idolGender, chartPageSize]);

  return (
    <MonthIdolList>
      {chartIdolsData.map((idolsData) => {
        return <MonthIdol key={idolsData.id} idolsData={idolsData} />;
      })}
    </MonthIdolList>
  );
}

MonthChartList.propTypes = {
  idolGender: PropTypes.string.isRequired,
  chartPageSize: PropTypes.number.isRequired,
};

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
