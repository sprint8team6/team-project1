import Header from '@components/Header';
import MyFavorites from './Components/MyFavorites';
import FavoriteCandidates from './Components/FavoriteCandidates';
import styled from 'styled-components';

export default function MyPage() {
  return (
    <>
      <Header />
      <MyFavorites />
      <FavoriteCandidates />
    </>
  );
}
