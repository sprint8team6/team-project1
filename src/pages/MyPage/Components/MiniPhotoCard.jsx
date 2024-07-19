import styled from 'styled-components';
import CircularIdolImage from '@components/CircularIdolImage';
import PropTypes from 'prop-types';

export default function MiniPhotoCard({
  isCheckable = true,
  isDeletable = false,
  isChecked = false,
  size = 'small',
  onCheckChange = null,
}) {
  return (
    <PhotoCard>
      <CircularIdolImage
        isCheckable={isCheckable}
        isDeletable={isDeletable}
        isChecked={isChecked}
        size={size}
        onCheckChange={onCheckChange}
      />
      <IdolName>망곰이</IdolName>
      <TeamName>부앙단</TeamName>
    </PhotoCard>
  );
}

MiniPhotoCard.propTypes = {
  isCheckable: PropTypes.bool,
  isChecked: PropTypes.bool,
  onCheckChange: PropTypes.func,
  size: PropTypes.string,
  isDeletable: PropTypes.bool,
};

const PhotoCard = styled.div`
  height: 100%;
  max-width: 12.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const IdolName = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
`;

const TeamName = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
`;
