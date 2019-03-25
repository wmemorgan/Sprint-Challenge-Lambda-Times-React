import styled from 'styled-components'
import { color, fontStyles, flex } from './components/StyleComponents/theme'

const AppContainer = styled.div`
  ${flex('column','center')};
  background: ${color.primaryBgShading};
  color: ${color.primaryColor};
  font-family: ${fontStyles.defaultFont}
`

export default AppContainer