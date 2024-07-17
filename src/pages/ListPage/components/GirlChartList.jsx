import styled from 'styled-components';
import GirlIdolImage from '@assets/TestIdolImage/Winter.png';
import MonthIdol from './MonthIdol';

export default function GirlChartList() {
  return (
    <MonthIdolList>
      <MonthIdol idolImage={GirlIdolImage} />
      <MonthIdol idolImage={GirlIdolImage} />
      <MonthIdol idolImage={GirlIdolImage} />
      <MonthIdol idolImage={GirlIdolImage} />
      <MonthIdol idolImage={GirlIdolImage} />
      <MonthIdol idolImage={GirlIdolImage} />
      <MonthIdol idolImage={GirlIdolImage} />
      <MonthIdol idolImage={GirlIdolImage} />
      <MonthIdol idolImage={GirlIdolImage} />
      <MonthIdol idolImage={GirlIdolImage} />
    </MonthIdolList>
  );
}

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
