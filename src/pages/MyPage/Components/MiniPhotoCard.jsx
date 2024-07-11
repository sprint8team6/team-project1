import CircularPhoto from './CircularPhoto';
import styled from 'styled-components';

export default function MiniPhotoCard() {
  return (
    <PhotoCard>
      <CircularPhoto></CircularPhoto>
      <IdolName>윈터</IdolName>
      <TeamName>에스파</TeamName>
    </PhotoCard>
  );
}
//추후 사이즈가 다르게 들어갈 수 있게 해주는 props 필요
const PhotoCard = styled.div`
  width: 10rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  @media screen and (max-width: 767px) {
    height: 44px;
  }
`;

const TeamName = styled.p`
  font-size: 1.4rem;
  color: white;
`;

const IdolName = styled.p`
  color: white;
  font-size: 1.6rem;
`;
