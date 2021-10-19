import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      val: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(e) {
    this.setState({ val: e.target.value })
  }

  handleClick(e) {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <label>
          Email:
          <input type='text' name='Email' value={this.state.val} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Sign Up' />
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.getElementById('root')
);
