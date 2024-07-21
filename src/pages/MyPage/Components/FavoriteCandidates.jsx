import { ReactComponent as PlusIcon } from '@assets/svg/Ic_plus_24px.svg';
import { ReactComponent as PageLeft } from '@assets/svg/btn_pagination_arrow_left.svg';
import { ReactComponent as PageRight } from '@assets/svg/btn_pagination_arrow_right.svg';
import styled from 'styled-components';
import Button from '@components/Button';
import { getIdols } from '@apis/idolApi';
import { TABLET_LIMIT, MOBILE_LIMIT } from '@constants/globalConstant';
import { useEffect, useState } from 'react';
import MiniPhotoCard from './MiniPhotoCard';

export default function FavoriteCandidates() {
  const [loading, setLoading] = useState([]);
  const [idols, setIdols] = useState([]);
  useEffect(() => {
    const fetchIdols = async () => {
      try {
        const response = await getIdols({
          pageSize: 16,
          cursor: 0,
        });
        // eslint-disable-next-line no-console
        console.log('API 응답:', response); // 전체 응답 구조 확인
        if (response && response.list) {
          setIdols(
            response.list.map((idol) => ({ ...idol, isChecked: false }))
          );
        } else {
          console.error('잘못된 응답 구조:', response);
        }
      } catch (error) {
        console.error('아이돌 불러오기 실패: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIdols();
  }, []);

  const handleAddFavorites = () => {
    const favoriteIdols = idols.filter((idol) => idol.isChecked);
    const storedFavorites =
      JSON.parse(localStorage.getItem('favoriteIdols')) || [];
    const uniqueFavorites = Array.from(
      new Set([...storedFavorites, ...favoriteIdols].map(JSON.stringify))
    ).map(JSON.parse);

    localStorage.setItem('favoriteIdols', JSON.stringify(uniqueFavorites));

    setIdols((prevIdols) =>
      prevIdols.map((idol) => ({ ...idol, isChecked: false }))
    );
  };

  const onCheckChangeEvent = (id) => {
    setIdols((prevIdols) => {
      const updatedIdols = prevIdols.map((idol) =>
        idol.id === id ? { ...idol, isChecked: !idol.isChecked } : idol
      );

      return updatedIdols;
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <AddFavoriteBox>
      <AddFavoriteTitle>관심있는 아이돌을 추가해보세요.</AddFavoriteTitle>
      <CandidatesBox>
        <PageLeft />
        <IdolList>
          {idols && idols.length > 0 ? (
            idols.map((idol) => (
              <MiniPhotoCard
                key={idol.id}
                name={idol.name}
                team={idol.group}
                $isChecked={idol.isChecked}
                onCheckChange={() => onCheckChangeEvent(idol.id)}
                size="large"
                $isCheckable
                idolImage={idol.profilePicture}
                $isDeletable={false}
              />
            ))
          ) : (
            <p>아이돌 데이터를 불러오는 중입니다...</p>
          )}
        </IdolList>
        <PageRight />
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

const AddFavoriteBox = styled.div`
  gap: 3rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 120rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 2.4rem;
  & > svg {
    height: 100%;
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
  gap: 2rem;

  @media screen and (max-width: ${TABLET_LIMIT}px) {
    grid-template-columns: repeat(4, 1fr);
    & > *:nth-child(n + 9) {
      display: none;
    } //해당 부분은 반응형 테스트를 위해 렌더링 수를 줄여주는 부분으로 추후 api를 통해 받아오면 수정 예정

    @media screen and (max-width: ${MOBILE_LIMIT}px) {
      grid-template-columns: repeat(3, 1fr);
      & > *:nth-child(n + 7) {
        display: none;
      } //해당 부분은 반응형 테스트를 위해 렌더링 수를 줄여주는 부분으로 추후 api를 통해 받아오면 수정 예정
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
