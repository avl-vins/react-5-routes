import React from 'react'
import styled from 'styled-components'

const LoadingContainer = styled.div`

    width: 50%;
    height: 20px;
    background: 
    linear-gradient(90deg,#0001 33%,#0005 50%,#0001 66%)
      #f2f2f2;
    background-size:300% 100%;
    animation: l1 1s infinite linear;
 
  @keyframes l1 {
    0% {background-position: right}
  }
`

export const Loading = () => {
  return (
    <LoadingContainer></LoadingContainer>
  )

}

/* HTML: <div class="loader"></div> */

