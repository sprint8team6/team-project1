import CircularPhoto from './CircularPhoto';
import styled from 'styled-components';

const MiniPhotoCard = () => {
  return (
    <PhotoCard>
      <CircularPhoto></CircularPhoto>
      <p>윈터</p>
      <p>에스파</p>
    </PhotoCard>
  );
};

const PhotoCard = styled.div`
width : 100px;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 767px) {
  height: 44px;
}
`;

export default MiniPhotoCard;
