import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
`

const Wrapper = ({ children }) => {
  return <Wrap>{children}</Wrap>
}

export default Wrapper
