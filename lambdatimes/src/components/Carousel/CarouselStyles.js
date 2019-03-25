import styled, { css } from 'styled-components'
import { flex, color, breakpoints, fontSizing } from '../StyleComponents/theme'

export const CarouselContainer = styled.div`
    width: 100%;
    ${flex('row','center','center')};
    height: 500px;
    position: relative;
    overflow: hidden;
    margin-top: 16px;
  }

  @media (min-width: 1200px) {
      width: 1200px;
  }

  @media ${breakpoints[0]} {
    height: 200px;
    margin-top: 10px;
  }
`

export const CarouselButtons = styled.div`
  ${flex('row','none','center')};
  color: ${color.lightText};
  background: ${color.primaryColor};;
  font-size: ${fontSizing.l};
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

export const ImageContainer = styled.div`
  width: 95%;
  max-width: 600px;

`