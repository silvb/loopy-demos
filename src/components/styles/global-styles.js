import { createGlobalStyle } from "styled-components"
import COLORS from "./colors"

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

  :root {
    --blinkAnimation: blink 600ms ease-in-out 3;
    --spinAnimation: spin 1s linear infinite;
    --headlineFont: 'Sigmar One', Arial, Helvetica, sans-serif;
    --pageWidth: 720px;
    --headerHeight: 64px;
    --yellow: ${COLORS.yellow};
    --green: ${COLORS.green};
    --red: ${COLORS.red};
    --pink: ${COLORS.pink};
    --cyan: ${COLORS.cyan};
    --purple: ${COLORS.purple};
    --darkPurple: ${COLORS.darkPurple};
    --dark: ${COLORS.dark};
    --gray: ${COLORS.gray};
  }

  ::selection {
    background: var(--pink);
    color: var(--dark);
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

    background: var(--darkPurple);
    color: ghostwhite;
  }


  p, ul, a, span, ol li::marker {
    font-size: 1.2rem;
    line-height: 1.6rem;

    @media (min-width: 600px) {
        font-size: 1.3rem;
        line-height: 1.8rem;
    }
  }

  p {
    white-space: pre-line;
  }

  strong {
    font-weight: 900;
  }


  * {
    font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--headlineFont);
    color: var(--yellow);
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
    color: var(--cyan);
  }

  main ol {
    margin: 0;
    padding: 0 0 0 2rem;

    li {
      padding-left: 0.5rem;
    }
  }
`

export default GlobalStyles
