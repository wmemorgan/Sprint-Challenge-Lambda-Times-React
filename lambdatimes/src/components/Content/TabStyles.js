import styled, { css } from 'styled-components'
import { color, colorScheme, fontSizing, flex, breakpoints } from '../StyleComponents/theme'

export const TabsContainer = styled.div`
  width: 100%;
  ${flex('row', 'center', 'center')};
  border-bottom: 1px solid ${colorScheme.defaultBorderColor};
  height: 47px;
  background: ${color.lightText};

  @media (min-width: 1280px) {
    width: 1280px;
  }

  @media ${breakpoints[0]} {
    width: 95%;
    max-width: 600px;
    flex-wrap: wrap;
  }
}
`

export const Topics = styled.div`
  ${flex('row','center','none')}
  flex-wrap: wrap;

  @media ${breakpoints[0]} {
    justify-content: space-between;
    & * {
      margin: 10px 0;
    }
  }
  
`

export const Title = styled.span`
  width: 100%;
  text-align: center;
  font-size: ${fontSizing.xs}
`

export const TabContainer = styled.div`
  ${flex('row', 'center', 'none')}
  color: ${color.lightText};
  background: ${color.primaryColor};
  margin: 0 5px;
  padding: 2px 10px;
  font-size: ${fontSizing.xs};
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${props => 
    props.activeTab &&
    css`
      background: ${color.lightText};
      color: ${color.primaryColor};
      border: 2px solid ${color.primaryColor};
  `}

`