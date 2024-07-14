import styled from 'styled-components';
import MiniPhotoCard from './MiniPhotoCard';

export default function MyFavorites() {
  return (
    <>
      <MyFavoriteListBox>
        <MyFavoriteTitle>내가 관심있는 아이돌</MyFavoriteTitle>
        <MyFavoriteList>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
        </MyFavoriteList>
      </MyFavoriteListBox>
    </>
  );
}

const MyFavoriteListBox = styled.div`
  max-width: 120rem;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  @media screen and (max-width: 744px) {
    height: 44px;
  }
`;

const MyFavoriteTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  width: 100%;
  padding-left: 3.75rem;
`;

const MyFavoriteList = styled.div`
  display: flex;
  padding-left: 3.75rem;
`;
