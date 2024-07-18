import PropTypes from 'prop-types';
import styled from 'styled-components';
import CheckedTrue from '@assets/svg/checked_true.svg';
import CheckedFalse from '@assets/svg/checked_false.svg';

/** 라디오 버튼 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.className - 스타일을 위한 클래스명
 * @param {boolean} props.checked - 라디오 버튼이 체크되었는지 확인하는 props
 * @param {function} props.onClick - 라디오 버튼이 눌렸을 때
 */
export default function RadioButton({ className, checked = false, onClick }) {
  return (
    <StyledRadioButton
      className={className}
      onClick={onClick}
      checked={checked}
    />
  );
}

RadioButton.propTypes = {
  className: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
};

const BaseRadioButton = styled.button`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
`;

const StyledRadioButton = styled(BaseRadioButton)`
  background-image: ${({ checked }) =>
    checked ? `url(${CheckedTrue})` : `url(${CheckedFalse})`};
`;
