import * as styled from 'styled-components';

import reset from 'styled-reset';

const GlobalStyle = styled.createGlobalStyle`
  ${reset}
  body {
    margin: 0 auto;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
  }
`;

export default GlobalStyle;
