import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

class AppDrawer extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      drawerOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({drawerOpen: !this.state.drawerOpen})
  }

  render(){
    if (this.state.drawerOpen) {
      return (
        <div className='container layer'>
          <div
            className='menu'>
            <h1>Menu</h1>
            <ul onClick={this.handleClick}>
              <li><a href="#">About</a></li>
              <li><a href="#">Get Started</a></li>
              <li><a href="#">Sign In</a></li>
            </ul>
          </div>
        </div>
      )
    }
    return (
      <div className='container'>
        <FontAwesomeIcon
          className='icon'
          onClick={this.handleClick}
          icon={faBars}
          size="3x" />
      </div>
      )
  }
}

export default AppDrawer
