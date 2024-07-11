import styled from 'styled-components';
import MiniPhotoCard from './MiniPhotoCard';

export default function FavoriteIdols() {
  return <MiniPhotoCard></MiniPhotoCard>;
}

const PhotoCard = styled.div`
  width: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    height: 44px;
  }
`;
