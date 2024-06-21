import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BLACK};

    -webkit-font-smoothing: antialiased;
    width: 100vw;
    height: 100vh;
  }

  body, input, button, textarea {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }
`