import React from 'react'
import ReactDOM from 'react-dom'
import { BeakerIcon, ZapIcon } from '@primer/octicons-react'

class StopWatch extends React.Component {
  constructor(props){
    super(props)
    this.state={
      pause: true
    }
    this.handleStop = this.handleStop.bind(this)
  }

  handleStop(){
    console.log(this.state.pause)
  }

  render(){
     return (
       <div onClick={this.handleStop}>
         <div className='watch'>
           <p>0</p>
         </div>
         <TriangleRightIcon size={24} />
       </div>
     )
  }
}

export default StopWatch
