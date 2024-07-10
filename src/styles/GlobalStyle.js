import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;
    word-break: keep-all;
    font-family: Pretendard, sans-serif;
  }

  button {
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
  }

  em {
    font-style: normal;
    color: var(--brand-coral);
  }
`;

export default GlobalStyle;
