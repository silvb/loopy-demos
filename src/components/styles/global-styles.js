import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  :root {
    --blinkAnimation: blink 1.3s ease-in-out infinite;
    --spinAnimation: spin 1s linear infinite;
    --headlineFont: 'Sigmar One', cursive;
    --pageWidth: 720px;
    --headerHeight: 64px;
  }

  @media (min-width: 600px) {
    :root {
      --headerHeight: 132px;
    }
  }


  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* background: #282a36; */
    background: #383a59;
    color: white;
  }


  p, ul, a, span {
    font-size: 1.2rem;
    line-height: 1.5rem;

    @media screen and (min-width: 600px) {
        font-size: 1.3rem;
        line-height: 1.6rem;
    }
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
    font-family: var(--headlineFont);
    color:#FFFF80;
    overflow-wrap: break-word;
    line-height: 2rem;
  }

  @media (max-width: 599px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  button {
    outline: none;
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #80FFEA;
  }

  main ul {
    list-style-image: url("/list-style.svg");

    li {
      padding-bottom: 0.5rem;
    }
  }
`

export default GlobalStyles
