import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class AudioList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      selected: '',
      audioUrl: '',
      baseUrl: 'http://localhost:5000/'
    };
    this.fileList = this.fileList.bind(this);
    this.handleSelectorChange = this.handleSelectorChange.bind(this);
  }

  fileList() {
    return this.state.files.map(f => <li>{f.name}</li>);
  }

  buildAudioPlayer() {
    if (this.state.audioUrl) {
      return (
        <ReactAudioPlayer
          // src="https://storage.cloud.google.com/storytime-audio/Zato%20%E2%80%94%20a%20powerful%20Python-based%20ESB%20solution%20for%20your%20SOA"
          src={this.state.audioUrl}
          controls
        ></ReactAudioPlayer>
      );
    }
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
      selected: event.target.value,
      audioUrl: this.state.baseUrl + event.target.value
    });
  }

  render() {
    return (
      <div>
        <div>{this.buildAudioPlayer()}</div>
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
      </div>
    );
  }
}

export default AudioList;
