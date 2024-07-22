import Header from '@components/Header';
import topDesign from '@assets/svg/Image_top.svg';
import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import { getIdols } from '@apis/idolApi';
import MyFavorites from './Components/MyFavorites';
import FavoriteCandidates from './Components/FavoriteCandidates';

export default function MyPage() {
  const [allIdols, setAllIdols] = useState([]);
  const [favoriteIdols, setFavoriteIdols] = useState([]);

  const loadFavoriteIdols = useCallback(() => {
    const storedIdols = JSON.parse(localStorage.getItem('favoriteIdols')) || [];
    setFavoriteIdols(storedIdols);
  }, []);

  const fetchIdols = useCallback(async () => {
    try {
      const response = await getIdols({ pageSize: 16, cursor: 0 });
      if (response && response.list) {
        const storedIdols =
          JSON.parse(localStorage.getItem('favoriteIdols')) || [];
        const filteredIdols = response.list.filter(
          (idol) => !storedIdols.some((fav) => fav.id === idol.id)
        );
        setAllIdols(
          filteredIdols.map((idol) => ({ ...idol, isChecked: false }))
        );
      }
    } catch (error) {
      console.error('아이돌 불러오기 실패: ', error);
    }
  }, []);

  useEffect(() => {
    fetchIdols();
    loadFavoriteIdols();
  }, [fetchIdols, loadFavoriteIdols]);

  const handleDelete = useCallback(
    (idolId) => {
      const deletedIdol = favoriteIdols.find((idol) => idol.id === idolId);
      const updatedFavorites = favoriteIdols.filter(
        (idol) => idol.id !== idolId
      );

      localStorage.setItem('favoriteIdols', JSON.stringify(updatedFavorites));
      setFavoriteIdols(updatedFavorites);

      setAllIdols((prev) => [...prev, { ...deletedIdol, isChecked: false }]);

      fetchIdols();
    },
    [favoriteIdols, fetchIdols]
  );

  const handleAddFavorites = useCallback(
    (newFavorites) => {
      const updatedFavorites = [...favoriteIdols, ...newFavorites];
      localStorage.setItem('favoriteIdols', JSON.stringify(updatedFavorites));
      setFavoriteIdols(updatedFavorites);

      setAllIdols((prev) =>
        prev
          .map((idol) =>
            newFavorites.some((fav) => fav.id === idol.id)
              ? { ...idol, isChecked: false }
              : idol
          )
          .filter((idol) => !newFavorites.some((fav) => fav.id === idol.id))
      );
    },
    [favoriteIdols]
  );

  const handleCheckChange = useCallback((id) => {
    setAllIdols((prev) =>
      prev.map((idol) =>
        idol.id === id ? { ...idol, isChecked: !idol.isChecked } : idol
      )
    );
  }, []);
  return (
    <>
      <TopDesignImage src={topDesign} />
      <Header />
      <MyFavorites favoriteIdols={favoriteIdols} onDelete={handleDelete} />
      <FavoriteCandidates
        idols={allIdols}
        onAddFavorites={handleAddFavorites}
        onCheckChangeEvent={handleCheckChange}
      />
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
