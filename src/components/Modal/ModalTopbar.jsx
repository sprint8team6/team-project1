import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  StyledDeleteButton,
  StyledArrowLeftButton,
} from '@styles/CommonStyles';

/** 모달 상단의 제목/창 닫기 탑바
 * @param {Object} props - 컴포넌트 props
 * @param {function} props.onClose - Modal을 닫는 함수
 * @param {React.ReactNode} props.children - Modal 제목
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

/** -------------------------------------------------- */

/** 모달 상단의 제목/창 닫기 탑바
 * @param {Object} props - 컴포넌트 props
 * @param {function} props.onClose - Modal을 닫는 함수
 * @param {React.ReactNode} props.children - Modal 제목
 */
export function MobileTopBar({ children, onClose }) {
  return (
    <StyledMobileModalTopBar>
      <StyledStyledArrowLeftButton onClick={onClose} />
      <span>{children}</span>
    </StyledMobileModalTopBar>
  );
}

MobileTopBar.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

// styled-components

const StyledMobileModalTopBar = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 56px;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  span {
    color: var(--white, #f7f7f8);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const StyledStyledArrowLeftButton = styled(StyledArrowLeftButton)`
  position: fixed;
  left: 24px;
  z-index: 100;
`;
