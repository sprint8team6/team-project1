import CircularPhoto from './CircularPhoto';
import styled from 'styled-components';

export default function MiniPhotoCard() {
  return (
    <PhotoCard>
      <CircularPhoto></CircularPhoto>
      <IdolName>망곰이</IdolName>
      <TeamName>부앙단</TeamName>
    </PhotoCard>
  );
}
//추후 사이즈가 다르게 들어갈 수 있게 해주는 props 필요
const PhotoCard = styled.div`
  height: 100%;
  max-width: 12.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 767px) {
    height: 44px;
  }
`;

const IdolName = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
`;

const TeamName = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
`;
