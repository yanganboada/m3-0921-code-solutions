import React from 'react'
import ReactDOM from 'react-dom'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      index: 0
    }
    this.handleLeftClick = this.handleLeftClick.bind(this)
    this.handleRightClick = this.handleRightClick.bind(this)
  }

  componentDidMount() {
    this.autoPlay()
  }

  autoPlay() {
    const interval = setInterval(() => {
      const index = this.state.index !== this.props.pokeDex.length - 1
        ? this.state.index + 1
        : 0
      this.setState({ index })
    }, 3000)
    this.setState({ interval })
  }

  handleLeftClick() {
    const index = this.state.index !== 0 ? this.state.index - 1 : this.props.pokeDex.length - 1
    this.setState({ index })
  }

  handleRightClick() {
    const index = this.state.index !== this.props.pokeDex.length - 1 ? this.state.index + 1 : 0
    this.setState({ index })
  }

  render() {
    return (
      <div className="carousel">
        <div className="carousel-body">
          <i className="fas fa-chevron-left fa-3x cursor"
            onClick={this.handleLeftClick}>
          </i>
          {this.props.pokeDex.map((poke, index) => {
            return <img
              className={this.state.index !== index ? 'hide' : ''}
              src={poke.imageUrl}
              key={index}
              alt={poke.name} />
          })}
          <i className="fas fa-chevron-right fa-3x cursor"
            onClick={this.handleRightClick}>
          </i>
        </div>
        <div className="dots">
          {this.props.pokeDex.map((poke, index) => (
            <i className={`${index === this.state.index ? 'fas' : 'far'} fa-circle`}
              onClick={() => this.setState({ index })}
              key={index}></i>))}
        </div>
      </div>
    )
  }
}

export default Carousel
