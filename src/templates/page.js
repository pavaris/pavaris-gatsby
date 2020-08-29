import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Header from "../components/header"
import Layout from "../components/layout"
import { Link } from "gatsby"
import styled from "styled-components"
import { Wrapper, H1 } from "../components/styles/GlobalComponents"
import { offWhite, notBlack } from "../components/styles/vars"

const Page = props => {
  const { title, description, nav, rawData } = props.pageContext

  return (
    <Layout>
      <SEO title={title} description={description}></SEO>
      <Header nav={nav} />
      {rawData.info.title}
    </Layout>
  )
}

export default Page
