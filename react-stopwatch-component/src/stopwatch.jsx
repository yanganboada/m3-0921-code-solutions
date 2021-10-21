import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

class StopWatch extends React.Component {
  constructor(props){
    super(props)
    this.state={
      pause: true,
      count: 0,
      intervalId: null
    }
    this.handleControl = this.handleControl.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleControl(){
    if (this.state.pause && this.state.count <= 60) {
      const interval = setInterval(() => {
        this.setState({count: this.state.count+1});
      }, 1000);
      this.setState({pause: !this.state.pause, intervalId: interval})
    }
    this.setState({ pause: !this.state.pause})
    clearInterval(this.state.intervalId)

  }

  handleReset(){
    this.setState({ count: 0, intervalId: null})
  }

  render(){
     return (
       <div className='container'>
         <div className='watch' onClick={this.handleReset}>
           <p className='second'>{this.state.count}</p>
         </div>
         <div>
          <FontAwesomeIcon
            icon={this.state.pause ? faPlay : faPause}
            size="3x"
            onClick={this.handleControl}
            className="control" />
         </div>
       </div>
     )
  }
}

export default StopWatch
