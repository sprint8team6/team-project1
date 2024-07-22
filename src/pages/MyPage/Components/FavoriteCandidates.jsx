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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [candidatePageSize, setCandidatePageSize] = useState(16);
  const [cursor, setCursor] = useState(null);

  // 브라우저 사이즈 변경되면 현재 사이즈 반환
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth]);

  // 반응형으로 데이터 노출 개수 정하기
  useEffect(() => {
    if (screenWidth <= MOBILE_LIMIT) {
      setCandidatePageSize(6);
    } else if (screenWidth <= TABLET_LIMIT) {
      setCandidatePageSize(8);
    } else {
      setCandidatePageSize(16);
    }
  }, [screenWidth]);

  // nextCursor값 가져오기
  useEffect(() => {
    const handleLoad = async () => {
      try {
        const { nextCursor } = await getIdols({
          pageSize: candidatePageSize,
          cursor: 0,
        });
        setCursor(nextCursor);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    handleLoad();
  }, [candidatePageSize]);

  useEffect(() => {
    const fetchIdols = async () => {
      try {
        const response = await getIdols({
          pageSize: candidatePageSize,
        });
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
  }, [candidatePageSize]);

  const onCheckChangeEvent = (id) => {
    setIdols((prevIdols) => {
      const updatedIdols = prevIdols.map((idol) =>
        idol.id === id ? { ...idol, isChecked: !idol.isChecked } : idol
      );

      // 로컬 스토리지 업데이트
      const favoriteIdols = updatedIdols.filter((idol) => idol.isChecked);
      localStorage.setItem('favoriteIdols', JSON.stringify(favoriteIdols));

      return updatedIdols;
    });
  };

  const handleClickRight = async () => {
    if (!cursor) return; // cursor가 null일 경우 함수 실행 중단
    try {
      setLoading(true);
      const response = await getIdols({
        pageSize: candidatePageSize,
        cursor,
      });
      if (response && response.list) {
        setIdols(response.list.map((idol) => ({ ...idol, isChecked: false })));
        setCursor(response.nextCursor);
      } else {
        console.error('잘못된 응답 구조:', response);
      }
    } catch (error) {
      console.error('아이돌 불러오기 실패: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickLeft = async () => {
    try {
      setLoading(true);
      const response = await getIdols({
        pageSize: candidatePageSize,
        cursor: cursor - candidatePageSize,
      });
      if (response && response.list) {
        setIdols(response.list.map((idol) => ({ ...idol, isChecked: false })));
        setCursor(response.nextCursor);
      } else {
        console.error('잘못된 응답 구조:', response);
      }
    } catch (error) {
      console.error('아이돌 불러오기 실패: ', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <AddFavoriteBox>
      <AddFavoriteTitle>관심있는 아이돌을 추가해보세요.</AddFavoriteTitle>
      <CandidatesBox>
        <PageLeft onClick={handleClickLeft} />
        <IdolList>
          {idols && idols.length > 0 ? (
            idols.map((idol) => (
              <MiniPhotoCard
                key={idol.id}
                name={idol.name}
                team={idol.group}
                $isChecked={idol.isChecked}
                onCheckChange={() => onCheckChangeEvent(idol.id)}
                size={screenWidth > 375 ? 'large' : 'medium'}
                $isCheckable
                idolImage={idol.profilePicture}
                $isDeletable={false}
              />
            ))
          ) : (
            <p>아이돌 데이터를 불러오는 중입니다...</p>
          )}
        </IdolList>
        <PageRight onClick={handleClickRight} />
      </CandidatesBox>
      <AddButtonBox>
        <StyledButton rounded>
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

const CandidatesBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 132rem;
  gap: 1rem;
  padding: 0 2.4rem;
  & > svg {
    height: 100%;
    @media (max-width: ${MOBILE_LIMIT}px) {
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
    gap: 1rem;
    & > *:nth-child(n + 9) {
      display: none;
    } //해당 부분은 반응형 테스트를 위해 렌더링 수를 줄여주는 부분으로 추후 api를 통해 받아오면 수정 예정
  }

  @media screen and (max-width: ${MOBILE_LIMIT}px) {
    grid-template-columns: repeat(3, 1fr);
    & > *:nth-child(n + 7) {
      display: none;
    } //해당 부분은 반응형 테스트를 위해 렌더링 수를 줄여주는 부분으로 추후 api를 통해 받아오면 수정 예정
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
