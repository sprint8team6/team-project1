import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import AltImage from '@assets/png/alt_image.png';
import { ReactComponent as CheckIcon } from '@assets/svg/ic_check.svg';
import { ReactComponent as DeleteButton } from '@assets/svg/btn_delete.svg';

/** 원형 아이돌 이미지 컴포넌트
 *
 * 체크 가능 여부와 삭제 가능 여부를 설정할 수 있습니다.
 *
 * @param {Object} props - 컴포넌트 props
 * @param {boolean} props.isChecked - 체크 상태
 * @param {boolean} props.isCheckable - 체크 가능 여부
 * @param {boolean} props.isDeletable - 삭제 버튼 활성 여부
 * @param {'small' | 'medium' | 'large'} props.size - 컴포넌트의 크기
 * @param {function} props.onDelete - 삭제 버튼 클릭 시 실행되는 함수
 * @param {function} props.onCheckChange - 체크 상태 변경 시 실행되는 함수
 * @returns {JSX.Element} 원형 아이돌 이미지 컴포넌트
 */
export default function CircularIdolImage({
  isChecked = false,
  isCheckable = false,
  isDeletable = false,
  size = 'small',
  onDelete = null,
  onCheckChange = null,
  idolImage = AltImage,
}) {
  const handleImageClick = () => {
    if (isCheckable && onCheckChange) {
      onCheckChange(!isChecked);
    }
  };

  return (
    <StyledCircularIdolImage
      size={size}
      data-is-checkable={isCheckable}
      onClick={handleImageClick}
    >
      <StyledImageWrapper>
        <StyledImage data-idol-image={idolImage} />
        {isChecked && (
          <>
            <StyledOverlay />
            <StyledCheckIconWrapper>
              <StyledCheckIcon size={size} />
            </StyledCheckIconWrapper>
          </>
        )}
        {isDeletable && <StyledDeleteButton size={size} onClick={onDelete} />}
      </StyledImageWrapper>
    </StyledCircularIdolImage>
  );
}

CircularIdolImage.propTypes = {
  isChecked: PropTypes.bool,
  isCheckable: PropTypes.bool,
  isDeletable: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onDelete: PropTypes.func,
  onCheckChange: PropTypes.func,
  idolImage: PropTypes.string.isRequired,
};

// styled-components

// CSS 함수
const IMAGE_SIZES = {
  small: css`
    width: 70px;
    height: 70px;
  `,
  medium: css`
    width: 100px;
    height: 100px;
  `,
  large: css`
    width: 128px;
    height: 128px;
  `,
};

const CHECK_ICON_SIZES = {
  small: 30,
  medium: 40,
  large: 55,
};

const DELETE_BUTTON_SIZES = {
  small: 25,
  medium: 35,
  large: 60,
};

// Styled
const StyledCircularIdolImage = styled.div`
  padding: 5px;
  border-radius: 50%;
  border: 1px solid var(--brand-coral);
  cursor: ${({ 'data-is-checkable': isCheckable }) =>
    isCheckable ? 'pointer' : 'default'};
  ${({ size }) => IMAGE_SIZES[size]};
`;

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(271deg, #f96e68 -9.84%, #fe578f 107.18%);
  opacity: 0.5;
  z-index: 1;
`;

const StyledImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: 0;

  background-image: ${({ 'data-idol-image': idolImage }) =>
    idolImage ? `url(${idolImage})` : `url(${AltImage})`};
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
`;

const StyledCheckIconWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const StyledCheckIcon = styled(CheckIcon)`
  width: ${({ size }) => CHECK_ICON_SIZES[size]}px;
  height: ${({ size }) => CHECK_ICON_SIZES[size]}px;
  opacity: 1;
`;

const StyledDeleteButton = styled(DeleteButton)`
  position: absolute;
  top: ${({ size }) => (size === 'large' ? '-12px' : '-8px')};
  right: ${({ size }) => (size === 'large' ? '-12px' : '-8px')};
  width: ${({ size }) => DELETE_BUTTON_SIZES[size]}px;
  height: ${({ size }) => DELETE_BUTTON_SIZES[size]}px;
  z-index: 3;
  cursor: pointer;
`;
