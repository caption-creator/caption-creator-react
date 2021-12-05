import React from 'react'
import styled from 'styled-components'

const DEVICE_MAX_WIDTH = 960;
const DEVICE_PADDING = 20

const Div = styled.div`
  max-width: calc(${DEVICE_MAX_WIDTH}px + ${DEVICE_PADDING * 2}px);
  padding: ${DEVICE_PADDING}px;
  margin: 0px auto;
`

const Container = (props) => {
  return(
    <Div>
      {props.children}
    </Div>
  )
}

export default Container;