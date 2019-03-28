import styled from 'styled-components'
import { color, colorScheme, flex } from './StyleComponents/theme'

export const TopBarDesign = styled.div`
  width: 100%;
  ${flex('row','none','center')};
  position: fixed;
  height: 44px;
  background: ${color.primaryColor};
  z-index: 10;
`

export const Container = styled.div`
  width: 100%;
  ${flex('row','none','none')};
  color: ${colorScheme.headerFontColor};
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
  .top-bar .container {
    width: 1280px;
  }
`

export const ContainerLeft = styled.div`
${flex('row','center','none')};
  flex: 1;
  font-size: 11px;

  span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`

export const ContainerCenter = styled.div`
  ${flex('row','center','center')};
  flex: 3;
  font-size: 9px;

  span {
    cursor: pointer;
    margin-right: 5%;
  }

  span:last-child {
    margin-right: 0;
  }

  span:hover {
    text-decoration: underline;
  }
`

export const ContainerRight = styled.div`
  ${flex('row','center','flex-end')};
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  span {
    cursor: pointer;
  }

`