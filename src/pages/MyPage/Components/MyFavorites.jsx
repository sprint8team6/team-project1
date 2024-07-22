import styled from 'styled-components';
import { TABLET_LIMIT, MOBILE_LIMIT } from '@constants/globalConstant';
import PropTypes from 'prop-types';
import MiniPhotoCard from './MiniPhotoCard';

export default function MyFavorites({ favoriteIdols, onDelete }) {
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
            size="medium"
            $isChecked={false}
            $isDeletable
            $isCheckable={false}
            idolImage={idol.profilePicture}
            onDelete={() => onDelete(idol.id)}
          />
        ))}
      </MyFavoriteList>
    </MyFavoriteListBox>
  );
}

MyFavorites.propTypes = {
  favoriteIdols: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      group: PropTypes.string.isRequired,
      profilePicture: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

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
