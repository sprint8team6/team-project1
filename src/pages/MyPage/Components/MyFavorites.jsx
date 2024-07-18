import styled from 'styled-components';
import MiniPhotoCard from './MiniPhotoCard';
import { TABLET_LIMIT, MOBILE_LIMIT } from '@constants/globalConstant';

export default function MyFavorites() {
  return (
    <MyFavoriteListBox>
      <MyFavoriteTitle>내가 관심있는 아이돌</MyFavoriteTitle>
      <MyFavoriteList>
        <MiniPhotoCard isDeletable />
        <MiniPhotoCard isDeletable />
        <MiniPhotoCard isDeletable />
        <MiniPhotoCard isDeletable />
      </MyFavoriteList>
    </MyFavoriteListBox>
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
`;

const MyFavoriteTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  width: 100%;
  padding-left: 3.75rem;
  @media screen and (max-width: ${TABLET_LIMIT}px) {
    font-size: 2rem;
  }

  @media screen and (max-width: ${MOBILE_LIMIT}px) {
    font-size: 1.6rem;
    padding-left: 2.4rem;
  }
`;

const MyFavoriteList = styled.div`
  display: flex;
  padding-left: 3.75rem;
  gap: 2.4rem;
  overflow: hidden;
`;
