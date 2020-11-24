import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle, css } from "styled-components"
import Logo from "./svg/logo"
import MenuIcon from "./svg/menu-icon"

const StyledHeader = styled.header`
  background: #282a36;
  width: 100%;
  z-index: 100;
  position: sticky;
  top: 0;
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`

const StyledHeaderContent = styled.div`
  margin: 0 auto;
  max-width: 720px;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;

  #logo {
    display: none;
  }
  @media (min-width: 600px) {
    padding: 1rem 1rem;

    #logo {
      display: block;
    }

    #menu-icon {
      display: none;
    }
  }
`

const StyledHeaderLinkWrapper = styled.div`
  flex: 1 1 auto;
  margin-left: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0.5rem 0;
  box-sizing: border-box;
  height: 48px;

  @media (min-width: 600px) {
    justify-content: space-between;
    margin-left: 2rem;
    height: 96px;
  }
`

const StyledTitle = styled(Link)`
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    color: #9580ff;
  }
`

const StyledTopNav = styled.nav`
  display: none;

  @media (min-width: 600px) {
    display: block;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      margin-right: 1rem;

      a {
        color: #ff80bf;
        font-family: var(--headlineFont);
        font-size: 1.3rem;
        position: relative;

        @media (min-width: 720px) {
          font-size: 1.5rem;
        }

        :after {
          content: " ";
          width: 0;
          transition: all 0.2s ease-in;
          position: absolute;
          bottom: 0;
          left: 50%;
          height: 6px;
          background: #ff80bf;
          border-radius: 2px;
        }
      }

      &:hover {
        a:after {
          left: 0;
          width: 100%;
        }
      }
    }
  }
`

const GlobalOverflow = createGlobalStyle`
  body {
    overflow: ${({ showSideNav }) => (showSideNav ? "hidden" : "overflow")}
  }
`

const visibleSideNav = css`
  transition: left 0.1s ease-in 0s, background-color 0.1s ease-in 0.1s,
    height 0s linear 0s;
  height: 100vh;
  left: 0;
  background-color: #00000080;
`

const hiddenSideNav = css`
  transition: left 0.1s ease-out 0.1s, background-color 0.1s ease-out 0s,
    height 0s linear 0.2s;
  height: 0;
  left: -100vw;
  background-color: #0000;
`

const StyledSideNav = styled.aside`
  @media (min-width: 600px) {
    display: none;
  }

  position: absolute;
  top: var(--headerHeight);
  width: 100vw;
  z-index: 100;

  ${({ show }) => (show ? visibleSideNav : hiddenSideNav)}

  ul {
    background: #282a36;
    width: 200px;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    padding-left: 1rem;
    padding-top: 2rem;

    li {
      margin-bottom: 1rem;
      a {
        color: #ff80bf;
        font-family: var(--headlineFont);
        font-size: 1.5rem;
      }
    }
  }
`

const NavList = () => (
  <ul>
    <li>
      <Link to="/">Demos</Link>
    </li>
    <li>
      <Link to="/posts">Posts</Link>
    </li>
    <li>
      <Link to="/uses">Uses</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
)

const Header = () => {
  const [showSideNav, setShowSideNav] = useState(false)

  return (
    <>
      <GlobalOverflow showSideNav={showSideNav} />
      <StyledHeader>
        <StyledHeaderContent>
          <Link to="/" id="logo">
            <Logo />
          </Link>
          <button
            type="button"
            id="menu-icon"
            onClick={() => {
              setShowSideNav(!showSideNav)
            }}
          >
            <MenuIcon open={showSideNav} />
          </button>
          <StyledHeaderLinkWrapper>
            <StyledTitle
              to="/"
              onClick={() => {
                setShowSideNav(false)
              }}
            >
              <h1>Loopy Demos</h1>
            </StyledTitle>
            <StyledTopNav>
              <NavList />
            </StyledTopNav>
          </StyledHeaderLinkWrapper>
        </StyledHeaderContent>
        <StyledSideNav
          show={showSideNav}
          onClick={() => {
            setShowSideNav(false)
          }}
        >
          <NavList />
        </StyledSideNav>
      </StyledHeader>
    </>
  )
}

export default Header
