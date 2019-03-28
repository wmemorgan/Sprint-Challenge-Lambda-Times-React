import React from 'react';
import { HeaderContainer, HeaderDate, Temp } from './HeaderStyles'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderDate>SMARCH 32, 2018</HeaderDate>
      <h1>Lambda Times</h1>
      <Temp>98°</Temp>
    </HeaderContainer>
  )
}

export default Header