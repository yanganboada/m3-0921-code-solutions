import React from 'react'
import ReactDOM from 'react-dom'

class ToggleSwitch extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      switch: false
    }
    this.handleSwitch = this.handleSwitch.bind(this)
  }

  handleSwitch(){
    this.setState({ switch: !this.state.switch })
  }

  render(){
    return (
      <div className='container'>
        <div className={this.state.switch ? 'row on' : 'row off'}>
          <div className='btn' onClick={this.handleSwitch}></div>
        </div>
        <p>{this.state.switch ? 'on' : 'off'}</p>
      </div>
    )
  }
}

export default ToggleSwitch
