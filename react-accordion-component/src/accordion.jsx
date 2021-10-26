import React from 'react'
import ReactDOM from 'react-dom'

class Accordion extends React.Component{
  constructor(props){
    super(props)
    this.props = props
    this.state={
      id: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(currentId){
    this.state.id !== currentId
    this.setState({ id: currentId })
  }

  render(){
    return (
      <div className="container">
        {this.props.languages.map(x => (
          <div className="content" key={x.id} >
            <h3
              className="title"
              onClick={() => this.handleClick(x.id)}>
              {x.subject}
            </h3>
            <p className={this.state.id === x.id ? 'description' : 'hide'}>
              {x.description}
            </p>
          </div>
        ))}
      </div>
    )
  }
}

export default Accordion
