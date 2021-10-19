import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ val: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <label>
          Email:
          <input type='text' name='Email' onChange={this.handleChange} />
        </label>
        <input type='submit' value='Sign Up' onSubmit={this.handleClick} />
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.getElementById('root')
);
