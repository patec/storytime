import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', text: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(title, text) {
    this.setState({ title: title, text: text });
  }

  render() {
    return (
      <div>
        <h3 value={this.state.title}></h3>
        <p value={this.state.text}></p>
      </div>
    );
  }
}

export default Article;
