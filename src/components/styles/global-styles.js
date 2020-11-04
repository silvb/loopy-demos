import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
    }
  }

  html {
    --blinkAnimation: blink 2s ease-in-out infinite;
  }


  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: #282a36;
    color: white;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }

  * {
    font-family: "Source Sans Pro", "Arial", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Source Sans Pro", "Arial Black", sans-serif;
    color:#FFFF80;
    font-weight: 900;
  }

  button {
    outline: none;
    border: none;
    background: none;
    padding: 0;
  }
`

export default GlobalStyles
