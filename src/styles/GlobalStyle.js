import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`  
  :root {
    --dark-black: #02000e;
    --light-black: #181d26;
    --dark-gray: #67666e;
    --medium-gray: #828282;
    --light-gray: #a3a5a8;
    --dark-white: #8c92ab;
    --white: #f7f7f8;
    --yellow: #d2c030;
  
    --rectangle-blue: #051d31;
    --error-red: #ff3b3b;

    /* Brand color */
    --brand-coral: #f96d69;
    --brand-pink: #fe5493;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    font-size: 62.5%;
    word-break: keep-all;
    font-family: Pretendard, sans-serif;
		background-color: #000000;
    color: var(--white);
  }

  button, input {
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
	font-family: Pretendard, sans-serif;
  }

  em {
    font-style: normal;
    color: var(--brand-coral);
  }
`;

export default GlobalStyle;
