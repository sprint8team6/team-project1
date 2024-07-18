import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyledDeleteButton } from '@styles/CommonStyles';

/** 모달 상단의 제목/창 닫기 탑바
 * @param {Object} props - 컴포넌트 props
 * @param props.onClose {function} - Modal을 닫는 함수
 * @param props.children - Modal 제목
 */
export default function ModalTopBar({ children, onClose }) {
  return (
    <StyledModalTopBar>
      <span>{children}</span>
      <StyledDeleteButton onClick={onClose} />
    </StyledModalTopBar>
  );
}

ModalTopBar.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

// styled-components

const StyledModalTopBar = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  span {
    color: var(--white, #f7f7f8);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
