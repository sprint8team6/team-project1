import TestImage from '../../../assets/TestIdolImage/Winter.png';
import styled from 'styled-components';

const CircularPhoto = () => {
  return <PhotoStyle src={TestImage} alt="연예인 이미지"></PhotoStyle>;
};

const PhotoStyle = styled.img`
    width: 100%;
`;
export default CircularPhoto;
