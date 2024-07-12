import styled from 'styled-components';
import IdolImg from '@assets/TestIdolImage/Winter.png';

export default function MonthIdolImg() {
  return (
    <ChartIdolImg>
      <img src={IdolImg} alt="아이돌 이미지" />
    </ChartIdolImg>
  );
}

const ChartIdolImg = styled.div`
  width: 70px;
  height: 70px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid var(--brand-coral);

  & > img {
    width: 100%;
  }
`;
