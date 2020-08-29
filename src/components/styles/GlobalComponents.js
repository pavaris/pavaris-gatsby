import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`
export const H1 = styled.h1`
  font-size: 50px;
  font-weight: 300;
  margin-bottom: 2rem;
  @media (max-width: 767px) {
    font-size: 35px;
  }
`
