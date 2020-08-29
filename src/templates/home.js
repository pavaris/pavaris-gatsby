import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link } from "gatsby"
import styled from "styled-components"
import { Wrapper, H1 } from "../components/styles/GlobalComponents"
import { offWhite, notBlack } from "../components/styles/vars"

const HomeContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  h1 {
    opacity: 0;
    transition: ease 1500ms opacity 300ms;
  }
  &.active {
    h1 {
      opacity: 1;
    }
    li {
      transform: none;
      opacity: 1;
    }
  }
`

const Menu = styled.ul`
  margin-left: 4rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  &:hover {
    a {
      filter: blur(4px);
    }
  }
  li {
    margin-bottom: 1.5rem;
    font-size: 25px;
    font-weight: 100;
    transform: translateY(-8px);
    opacity: 0;
    transition: ease 300ms transform, ease 300ms opacity;
    @media (max-width: 767px) {
      font-size: 22px;
    }
    a {
      color: ${notBlack};
      text-decoration: none;
      transform: none;
      display: inline-block;
      transition: ease 400ms filter;
      &:hover {
        filter: none;
      }
    }
  }
`

const Home = props => {
  const { title, description, nav } = props.pageContext
  const [loaded, setLoad] = useState(false)

  useEffect(() => {
    // Update the document title using the browser API
    setTimeout(function () {
      setLoad(true)
    }, 500)
  })

  return (
    <Layout>
      <SEO title={title} description={description}></SEO>

      <HomeContainer className={loaded && "active"}>
        <Wrapper>
          <H1>pavaris ketavanan</H1>
          <Menu>
            {nav.map((item, i) => {
              return (
                <li key={i} style={{ transitionDelay: `${i * 200 + 1500}ms` }}>
                  <Link to={item.slug + "/"}>{item.title}.</Link>
                </li>
              )
            })}
          </Menu>
        </Wrapper>
      </HomeContainer>
    </Layout>
  )
}

export default Home
