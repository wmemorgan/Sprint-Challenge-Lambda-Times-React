import styled, { css } from 'styled-components'
import { flex, color } from '../StyleComponents/theme'

export const CarouselContainer = styled.div`
    width: 100%;
    ${flex('row','center','center')};
    height: 500px;
    position: relative;
    overflow: hidden;
    margin-top: 16px;
  }

  @media (min-width: 1200px) {
    .carousel {
      width: 1200px;
    }
`

export const CarouselButtons = styled.div`
  ${flex('row','none','center')};
  color: ${color.lightText};
  background: ${color.primaryColor};;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;

   img {
    width: 100%;
    display: none;
  }

  ${props => 
    props.leftButton &&
    css`
      top: 50%;
      left: 25px;
      transform: translate(0, -50%);
  `}

  ${props => 
    props.rightButton &&
    css`
      top: 50%;
      right: 25px;
      transform: translate(0, -50%);
  `}



`