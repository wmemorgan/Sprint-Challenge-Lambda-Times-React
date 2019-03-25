import React from 'react'
import styled from 'styled-components'

const LogoutWrapper = styled.div`
  padding: 5px;
  color: black;
  background: white;
  cursor: pointer;
  text-align: center;
  z-index: 5;
  overflow: visible;
  &:hover {
    color: white;
    background: black;
  }
`

const LogoutMenu = () => {
  const logout = () => {
    localStorage.removeItem('username')
    window.location = '/'
  }

  return (
    <LogoutWrapper onClick={logout}>
      Log Out
    </LogoutWrapper>
  )
}

export default LogoutMenu