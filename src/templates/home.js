import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Home = props => {
  const { title, description } = props.pageContext
  return (
    <Layout>
      <SEO title={title} description={description}></SEO>
      <div>hey what's up</div>
    </Layout>
  )
}

export default Home
