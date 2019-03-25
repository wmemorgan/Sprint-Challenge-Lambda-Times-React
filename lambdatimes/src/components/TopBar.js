import React from 'react';
import { TopBarDesign, Container, 
  ContainerLeft, ContainerCenter, ContainerRight } from './TopBarStyles'
import LogoutContainer from './StyleComponents/LogoutContainer'

const TopBar = () => {
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
          <span>
            {JSON.parse(localStorage.getItem('username')) ? 
              <LogoutContainer /> : 'LOG IN'
            }
          </span>
        </ContainerRight>
      </Container>
    </TopBarDesign>
  )
}

export default TopBar;