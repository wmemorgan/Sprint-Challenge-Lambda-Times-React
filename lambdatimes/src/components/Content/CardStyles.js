import styled from 'styled-components'
import { color, colorScheme, fontSizing, flex, fontStyles } from '../StyleComponents/theme'

export const CardsContainer = styled.div`
  width: 100%;
  ${flex('row','none','space-evenly')};
  flex-wrap: wrap;
  margin-top: 16px;

  @media (min-width: 1200px) {
    width: 1200px;     
  }
`

export const CardWrapper = styled.div `
  width: 380px;
  ${flex('column','none','space-between')};
  margin-bottom: 16px;
  padding: 24px;
  background: ${color.lightText};
`

export const Headline = styled.div`
  font-size: ${fontSizing.m}
  font-family: ${fontStyles.headingFont}
`

export const Author = styled.div`
  ${flex('row','center','none')};
  margin-top: 15px;

  span {
    padding-left: 10px;
    font-size: ${fontSizing.xs};
    letter-spacing: 1px;
    font-weight: bold;
  }
`

export const ImageContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid ${colorScheme.defaultBorderColor};
  height: 40px;

  img {
    width: 40px;
  }
`