import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

class ValidatedInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      notes: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    const currentPassword = e.target.value
    this.setState({ password: currentPassword})
    currentPassword.length <= 7
      ? this.setState({ notes: 'Your Password is too Shot' })
      : this.setState({ notes: '' })
  }

  render(){
    return (
      <div>
        <form>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              name="password"
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange} />
            <FontAwesomeIcon
              className = {this.state.password === '' ? 'hide' : 'icon'}
              icon={this.state.notes === '' ? faCheck : faTimes}
              color={this.state.notes === '' ? "green" : "red"}
              size="lg"/>
          </div>
          <div className={this.state.password === '' ? 'hide' : 'notes'}>
            <p>{this.state.notes}</p>
          </div>
        </form>
      </div>
    )
  }
}

export default ValidatedInput
