import React from 'react';
import styled from 'styled-components';

/** Button 컴포넌트
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @returns {JSX.Element}
 */
export default function Button({ children, rounded = false, ...props }) {
  return rounded ? (
    <StyledRoundedButton {...props}>{children}</StyledRoundedButton>
  ) : (
    <StyledButton {...props}>{children}</StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  width: 100%;
  height: 42px;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 3px;
  background: linear-gradient(90deg, #f86f65 0%, #fe5493 100%);

  color: var(--white);
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

const StyledRoundedButton = styled(StyledButton)`
  border-radius: 24px;
`;
