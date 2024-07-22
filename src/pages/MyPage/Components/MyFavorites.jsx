import styled from 'styled-components';
import { TABLET_LIMIT, MOBILE_LIMIT } from '@constants/globalConstant';
import { useCallback, useEffect, useState } from 'react';
import MiniPhotoCard from './MiniPhotoCard';

export default function MyFavorites() {
  const [favoriteIdols, setFavoriteIdols] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);

  const loadFavoriteIdols = useCallback(() => {
    const storedIdols = JSON.parse(localStorage.getItem('favoriteIdols')) || [];
    setFavoriteIdols(storedIdols);
  }, []);

  useEffect(() => {
    loadFavoriteIdols();
  }, []);

  const handleDelete = useCallback(
    (idolId) => {
      const updatedFavorites = favoriteIdols.filter(
        (idol) => idol.id !== idolId
      );
      localStorage.setItem('favoriteIdols', JSON.stringify(updatedFavorites));
      setFavoriteIdols(updatedFavorites);

      const storedIdols = JSON.parse(localStorage.getItem('idols')) || [];
      const updatedIdols = storedIdols.map((idol) =>
        idol.id === idolId ? { ...idol, isChecked: false } : idol
      );
      localStorage.setItem('idols', JSON.stringify(updatedIdols));
    },
    [favoriteIdols]
  );

  return (
    <MyFavoriteListBox>
      <MyFavoriteTitle>내가 관심있는 아이돌</MyFavoriteTitle>
      <MyFavoriteList>
        {favoriteIdols.map((idol) => (
          <MiniPhotoCard
            key={idol.id}
            id={idol.id}
            name={idol.name}
            team={idol.group}
            size={screenWidth > 375 ? 'medium' : 'small'}
            $isChecked={false}
            $isDeletable
            $isCheckable={false}
            idolImage={idol.profilePicture}
            onDelete={() => handleDelete(idol.id)}
          />
        ))}
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
  padding-left: 1.4rem;
  @media screen and (max-width: ${TABLET_LIMIT}px) {
    font-size: 2rem;
    padding-left: 4.6rem;
  }

  @media screen and (max-width: ${MOBILE_LIMIT}px) {
    font-size: 1.6rem;
    padding-left: 3rem;
  }
`;

const MyFavoriteList = styled.div`
  display: flex;
  padding-left: 3.75rem;
  gap: 2.4rem;
  overflow: hidden;
`;
