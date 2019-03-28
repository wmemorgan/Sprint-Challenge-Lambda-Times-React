import React, {Component } from 'react'
import styled from 'styled-components'
import LogoutMenu from './LogoutMenu'

const LogoutStyles = styled.div`
  ${props => props.theme.flex('column', 'center', 'center')};
  text-transform: uppercase;
`

class LogoutContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
  }

  toggleMenu () {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }))
  }

  componentDidMount() {
    this.setState({showMenu: false})
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  render () {
    return (
      <LogoutStyles>
        <div onClick={this.toggleMenu}>
          {JSON.parse(localStorage.getItem('username')).username}
          <i className="fas fa-caret-down" ></i>
        </div>
        {this.state.showMenu ? <LogoutMenu /> : ''}
      </LogoutStyles>
    )
  }

}

export default LogoutContainer