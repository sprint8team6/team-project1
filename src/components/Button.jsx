import React from 'react';
import styled from 'styled-components';

/**
 * Button 컴포넌트
 * @param {React.ReactNode} children - 버튼 value
 * @param {boolean} [isRounded=false] - 원형 버튼일지 결정하는 prop (기본=false)
 * @param {object} props - 프롭스
 * @returns {JSX.Element}
 */
export default function Button({ children, isRounded = false, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  display: flex;
  width: 100%;
  height: 42px;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: ${(isRounded) => (isRounded ? '3px' : '24px')};
  background: linear-gradient(90deg, #f86f65 0%, #fe5493 100%);

  color: var(--white);
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 200% */
  letter-spacing: 0.26px;

  &:disabled {
    background: var(--medium-gray);
    cursor: default;
  }
`;
