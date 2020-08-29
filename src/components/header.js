import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { offWhite, notBlack } from "../components/styles/vars"

const HeaderContainer = styled.header`
  position: fixed;
  top: 0%;
  height: 100%;
  width: 20%;
  padding: 0 20px;
  nav {
    padding-top: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    a {
      text-decoration: none;
      color: ${notBlack};
    }
    ul {
      padding-left: 20px;
    }
    li {
      margin-bottom: 15px;
      a {
        font-weight: 100;
        font-size: 16px;
      }
    }
  }
`

const HomeLink = styled(Link)`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 15px;
`

const Header = props => {
  const { nav } = props
  return (
    <HeaderContainer>
      <nav>
        <HomeLink to="/">pavaris ketavanan</HomeLink>
        <ul>
          {nav.map((item, i) => (
            <li key={i}>
              <Link to={"/" + item.slug}>{item.title}.</Link>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
