import React from 'react';
import axios from 'axios';

class URLInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: '', title: '', text: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.style = {
      width: '50%',
      padding: '50px',
      margin: 'auto',
      float: 'center'
    };
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
      .get(
        'https://us-central1-story-time-262322.cloudfunctions.net/news-to-text',
        params
      )
      .then(response => {
        console.log(response.data);
        this.setState({ text: response.data });
        window.location = '/stream';
      })
      .catch(err => {
        console.error(err);
        this.setState({ text: err.message });
      });
  }

  render() {
    return (
      <div style={this.style}>
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
