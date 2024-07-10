import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 12px;
  background-color: var(--light-black);

  /* 공용 스타일에서 수정해야 할 가능성 多 */
  padding: 24px 16px 32px 16px;
`;
