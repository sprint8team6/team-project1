import React from 'react';
import styled from 'styled-components';
import { StyledDeleteButton } from '@styles/CommonStyles';

export default function ModalTopBar({ children }) {
  return (
    <StyledModalTopBar>
      <label>{children}</label>
      <StyledDeleteButton />
    </StyledModalTopBar>
  );
}

const StyledModalTopBar = styled.div`
  display: flex;
  width: 100%;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;

  label {
    color: var(--white, #f7f7f8);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
