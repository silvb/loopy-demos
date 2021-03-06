import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../templates/layout"
import useDemos from "../helpers/use-demos"

const StyledDemosList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 220px;
  grid-row-gap: 0.5rem;
  grid-column-gap: 0.5rem;

  > article {
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
    position: relative;
    background: var(--purple);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 100%;
  max-width: 200px;

  .title {
    position: absolute;
    top: 0;
    left: 0;
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--yellow);
    background: #3a306cab;
    width: 100%;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
    opacity: 0;
    transition: opacity ease-out 200ms;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    > span {
      text-align: center;
      font-family: var(--headlineFont);
    }
  }

  &:hover {
    .title {
      opacity: 1;
    }
  }
`

const Demos = ({ location = {} }) => {
  const demos = useDemos()

  return (
    <Layout location={location}>
      <h1>Latest Demos</h1>
      <StyledDemosList>
        {demos.map(({ model, builder, slug, image }) => (
          <article id={slug} key={slug}>
            <StyledLink to={`/demos/${slug}`}>
              <Img
                fluid={image}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                imgStyle={{
                  objectFit: "contain",
                }}
                durationFadeIn={200}
              />
              <div className="title">
                <span>{model}</span>
                <span>{" - "}</span>
                <span>{builder}</span>
              </div>
            </StyledLink>
          </article>
        ))}
      </StyledDemosList>
    </Layout>
  )
}

export default Demos
