import React from 'react';
import { Dropdown } from 'semantic-ui-react';

class AudioList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [], selected: '' };
    this.fileList = this.fileList.bind(this);
    this.handleSelectorChange = this.handleSelectorChange.bind(this);
  }

  fileList() {
    return this.state.files.map(f => <li>{f.name}</li>);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/fetchFiles')
      .then(res => res.json())
      .then(result => {
        console.log(result);
        const formatted = result.map(file => {
          return { key: file.name, text: file.name, value: file.name };
        });
        this.setState({ files: formatted });
      });
  }

  handleSelectorChange(event) {
    this.setState({
      selected: event.target.value
    });
  }

  render() {
    return (
      <div>
        <select
          value={this.state.selected}
          onChange={this.handleSelectorChange}
        >
          {this.state.files.map(f => (
            <option key={f.key + 'list'} value={f.name}>
              {f.key}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default AudioList;
