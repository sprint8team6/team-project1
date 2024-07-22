import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
// api
import { getCharts } from '@apis/idolApi';
// spinner
import LoadingSpinner from '@components/LoadingSpinner';
// component
import MonthIdol from './MonthIdol';

export default function MonthChartList({ idolGender, chartPageSize }) {
  const [chartIdolsData, setChartIdolsData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = async (option) => {
      try {
        const { idols } = await getCharts(option);
        setChartIdolsData(idols);
        setLoading(false);
        console.log(idols);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    handleLoad({ gender: idolGender, pageSize: chartPageSize, cursor: 0 });
  }, [idolGender, chartPageSize]);

  if (isLoading) {
    return (
      <LoadingSpinner
        isLoading={isLoading}
        color="var(--brand-coral)"
        size={20}
        width="100%"
        height="100%"
        minLoadTime={1000}
      />
    );
  }

  return (
    <MonthIdolList>
      {chartIdolsData.length > 0 ? (
        chartIdolsData.map((idolsData) => {
          return <MonthIdol key={idolsData.id} idolsData={idolsData} />;
        })
      ) : (
        <LoadingSpinner
          isLoading={isLoading}
          color="var(--brand-coral)"
          size={20}
          width="100%"
          height="100%"
          minLoadTime={1000}
        />
      )}
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
