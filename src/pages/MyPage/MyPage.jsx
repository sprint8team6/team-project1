import Header from '@components/Header';
import MyFavorites from './Components/MyFavorites';
import FavoriteCandidates from './Components/FavoriteCandidates';
import topDesign from '@assets/svg/Image_top.svg';
import styled from 'styled-components';

export default function MyPage() {
  return (
    <>
      <TopDesignImage src={topDesign} />
      <Header />
      <MyFavorites />
      <FavoriteCandidates />
    </>
  );
}

const TopDesignImage = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;
