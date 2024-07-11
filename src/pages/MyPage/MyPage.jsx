import Header from '@components/Header';
import MiniPhotoCard from './Components/MiniPhotoCard';
import FavoriteIdols from './Components/FavoriteIdols';
import FavoriteCandidates from './Components/FavoriteCandidates';

export default function MyPage() {
  return (
    <>
      <Header></Header>
      <FavoriteIdols></FavoriteIdols>
      <FavoriteCandidates></FavoriteCandidates>
    </>
  );
}
