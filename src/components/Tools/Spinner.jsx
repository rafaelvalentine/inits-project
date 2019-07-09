import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
.lds-ring {
  display: inline-block;
  position: relative;
  width: 44px;
  height: 44px;
}
.lds-ring div {
  align-self: center;
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 31px;
  height: 31px;
  margin: 3px 0 0;
  border: 3px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`
const Spinner = () => {
  return (
    <Container>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </Container>
  )
}

export default Spinner
