import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Home = props => {
  const { title, description, nav } = props.pageContext
  console.log(nav)
  return (
    <Layout>
      <SEO title={title} description={description}></SEO>
      <header>
        <ul className="home-menu">
          {nav.map(item => {
            return (
              <li>
                <a href={item.link}>{item.title}</a>
              </li>
            )
          })}
        </ul>
      </header>
    </Layout>
  )
}

Home.propTypes = {
  nav: PropTypes.array.isRequired,
}

export default Home
