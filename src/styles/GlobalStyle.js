import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html { // html 태그 추가
    font-size: 62.5%;
    word-break: keep-all;
    font-family: Pretendard, sans-serif;
		background-color: #000000; // 배경색 추가
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
