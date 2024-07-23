import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as PlusIcon } from '@assets/svg/Ic_plus_24px.svg';
import { ReactComponent as PageLeft } from '@assets/svg/btn_pagination_arrow_left.svg';
import { ReactComponent as PageRight } from '@assets/svg/btn_pagination_arrow_right.svg';
import styled from 'styled-components';
import Button from '@components/Button';
import PropTypes from 'prop-types';
import { TABLET_LIMIT, MOBILE_LIMIT } from '@constants/globalConstant';
import MiniPhotoCard from './MiniPhotoCard';

export default function FavoriteCandidates({
  idols,
  onAddFavorites,
  onCheckChangeEvent,
}) {
  const [screenWidth, setScreenWidth] = useState(
    document.documentElement.clientWidth
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedIdols, setDisplayedIdols] = useState([]);
  const idolsPerPage =
    // eslint-disable-next-line no-nested-ternary
    screenWidth > TABLET_LIMIT ? 16 : screenWidth > MOBILE_LIMIT ? 8 : 6;
  const containerRef = useRef(null);
  const candidateListWidth = Math.trunc(screenWidth / 300);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(document.documentElement.clientWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth <= MOBILE_LIMIT) {
      setDisplayedIdols(idols.slice(0, idolsPerPage));
    } else {
      setDisplayedIdols(
        idols.slice(
          currentPage * idolsPerPage,
          (currentPage + 1) * idolsPerPage
        )
      );
    }
  }, [idols, currentPage, idolsPerPage, screenWidth]);

  const handleAddFavorites = () => {
    const favoriteIdols = idols.filter((idol) => idol.isChecked);
    onAddFavorites(favoriteIdols);
  };

  const handlePageChange = (direction) => {
    if (
      direction === 'next' &&
      (currentPage + 1) * idolsPerPage < idols.length
    ) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleScroll = () => {
    if (screenWidth <= MOBILE_LIMIT && containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      if (scrollLeft + clientWidth === scrollWidth) {
        setDisplayedIdols((prev) => [
          ...prev,
          ...idols.slice(prev.length, prev.length + idolsPerPage),
        ]);
      }
    }
  };

  return (
    <AddFavoriteBox>
      <AddFavoriteTitle>관심있는 아이돌을 추가해보세요.</AddFavoriteTitle>
      <CandidatesBox>
        {screenWidth > MOBILE_LIMIT && (
          <PageLeftButton
            onClick={() => handlePageChange('prev')}
            disabled={currentPage === 0}
          >
            <PageLeft />
          </PageLeftButton>
        )}
        <IdolList
          ref={containerRef}
          onScroll={handleScroll}
          isCandidateListWidth={candidateListWidth}
        >
          {displayedIdols.map((idol) => (
            <MiniPhotoCard
              key={idol.id}
              name={idol.name}
              team={idol.group}
              $isChecked={idol.isChecked}
              onCheckChange={() => onCheckChangeEvent(idol.id)}
              size={screenWidth > MOBILE_LIMIT ? 'large' : 'medium'}
              $isCheckable
              idolImage={idol.profilePicture}
              $isDeletable={false}
            />
          ))}
        </IdolList>
        {screenWidth > MOBILE_LIMIT && (
          <PageRightButton
            onClick={() => handlePageChange('next')}
            disabled={(currentPage + 1) * idolsPerPage >= idols.length}
          >
            <PageRight />
          </PageRightButton>
        )}
      </CandidatesBox>
      <AddButtonBox>
        <StyledButton rounded onClick={handleAddFavorites}>
          <PlusIcon />
          <StyledButtonContext>추가하기</StyledButtonContext>
        </StyledButton>
      </AddButtonBox>
    </AddFavoriteBox>
  );
}

const PageLeftButton = styled.button``;

const PageRightButton = styled.button``;
FavoriteCandidates.propTypes = {
  idols: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      group: PropTypes.string.isRequired,
      profilePicture: PropTypes.string.isRequired,
      isChecked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onAddFavorites: PropTypes.func.isRequired,
  onCheckChangeEvent: PropTypes.func.isRequired,
};

const AddFavoriteBox = styled.div`
  gap: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 130rem;
`;

const AddFavoriteTitle = styled.div`
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

const CandidatesBox = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 2.4rem;
  & > svg {
    height: 100%;
    flex-shrink: 0;
    @media screen and (max-width: ${MOBILE_LIMIT}px) {
      display: none;
    }
  }
`;

const IdolList = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  gap: 1rem;
  overflow: hidden;
  @media screen and (max-width: ${TABLET_LIMIT + 600}px) {
    grid-template-columns: repeat(7, 1fr);
    & > *:nth-child(n + 15) {
      display: none;
    }
  }
  @media screen and (max-width: ${TABLET_LIMIT + 450}px) {
    grid-template-columns: repeat(6, 1fr);
    & > *:nth-child(n + 13) {
      display: none;
    }
  }
  @media screen and (max-width: ${TABLET_LIMIT + 300}px) {
    grid-template-columns: repeat(5, 1fr);
    & > *:nth-child(n + 11) {
      display: none;
    }
  }

  @media screen and (max-width: ${TABLET_LIMIT + 150}px) {
    grid-template-columns: repeat(4, 1fr);
    & > *:nth-child(n + 9) {
      display: none;
    }
  }
  @media screen and ((max-width: ${MOBILE_LIMIT + 150}px) or 
  (max-width: ${TABLET_LIMIT - 50}px)) {
    grid-template-columns: repeat(3, 1fr);
    & > *:nth-child(n + 7) {
      display: none;
    }
  }
`;

const StyledButtonContext = styled.span`
  font-size: 1.6rem;
  margin-left: 0.8rem;
  line-height: 2.6rem;
`;

const StyledButton = styled(Button)`
  width: 25.5rem;
`;

const AddButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
