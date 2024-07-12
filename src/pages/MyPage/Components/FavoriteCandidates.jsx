import styled from 'styled-components';
import MiniPhotoCard from './MiniPhotoCard';
import Button from '@components/Button';
import { ReactComponent as PlusIcon } from '@assets/svg/Ic_plus_24px.svg';
import { ReactComponent as PageLeft } from '@assets/svg/btn_pagination_arrow_left.svg';
import { ReactComponent as PageRight } from '@assets/svg/btn_pagination_arrow_right.svg';

export default function FavoriteCandidates() {
  return (
    <AddFavoriteBox>
      <AddFavoriteTitle>관심있는 아이돌을 추가해보세요.</AddFavoriteTitle>
      <CandidatesBox>
        <PageLeft></PageLeft>
        <IdolList>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
          <MiniPhotoCard></MiniPhotoCard>
        </IdolList>
        <PageRight></PageRight>
      </CandidatesBox>
      <AddButtonBox>
        <StyledButton rounded>
          <PlusIcon></PlusIcon>
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
`;

const CandidatesBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IdolList = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  gap: 2rem;
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
