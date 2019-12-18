import React from 'react';
import axios from 'axios';

class URLInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '', title: '', text: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      url: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const params = {
      params: {
        url: this.state.url
      }
    };
    console.log('url: ' + this.state.url);

    axios
      .get('http://localhost:5000', params)
      .then(response => {
        console.log(response.data);
        this.setState({ text: response.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label style={{ paddingRight: '5px' }}>
            Submit a new article URL:
            <input
              style={{ paddingRight: '5px' }}
              type="text"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
          <h3 value={this.state.title}></h3>
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default URLInput;
