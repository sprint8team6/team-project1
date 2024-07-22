import styled from 'styled-components';
import CircularIdolImage from '@components/CircularIdolImage';
import PropTypes from 'prop-type';

export default function MiniPhotoCard({
  $isCheckable = false,
  $isDeletable = false,
  $isChecked = false,
  size = 'small',
  onCheckChange = null,
  team = null,
  name = null,
  idolImage = null,
}) {
  return (
    <PhotoCard>
      <CircularIdolImage
        isCheckable={$isCheckable}
        isDeletable={$isDeletable}
        onCheckChange={onCheckChange}
        isChecked={$isChecked}
        size={size}
        idolImage={idolImage}
      />
      <IdolName>{name}</IdolName>
      <TeamName>{team}</TeamName>
    </PhotoCard>
  );
}

MiniPhotoCard.propTypes = {
  $isCheckable: PropTypes.bool,
  $isChecked: PropTypes.bool,
  $isDeletable: PropTypes.bool,
  onCheckChange: PropTypes.func,
  size: PropTypes.string,
  team: PropTypes.string,
  name: PropTypes.string,
  idolImage: PropTypes.string,
};

const PhotoCard = styled.div`
  height: 100%;
  width: 12.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;

  @media (max-width: 374px) {
    width: 98px;
  }
`;

const IdolName = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
`;

const TeamName = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
`;
