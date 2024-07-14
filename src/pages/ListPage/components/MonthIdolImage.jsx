import styled from 'styled-components';
import IdolImage from '@assets/TestIdolImage/Winter.png';

export default function MonthIdolImage() {
  return (
    <ChartIdolImage>
      <img src={IdolImage} alt="아이돌 이미지" />
    </ChartIdolImage>
  );
}

const ChartIdolImage = styled.div`
  width: 70px;
  height: 70px;
  padding: 5px;
  border-radius: 100%;
  border: 1px solid var(--brand-coral);

  & > img {
    width: 100%;
  }
`;
