import React from 'react';
import { TopBarDesign, Container, 
  ContainerLeft, ContainerCenter, ContainerRight } from './TopBarStyles'

const TopBar = () => {
  const logout = () => {
    localStorage.removeItem('username')
    window.location = '/'
  }

  return (
    <TopBarDesign>
      <Container>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
          <span onClick={logout}>
            {JSON.parse(localStorage.getItem('username')) ? 
            `${JSON.parse(localStorage.getItem('username')).username}
            LOG OUT` : 
            'LOG IN'}
          </span>
        </ContainerRight>
      </Container>
    </TopBarDesign>
  )
}

export default TopBar;