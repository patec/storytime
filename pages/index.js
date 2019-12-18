import React from 'react';
// import Playlist from 'react-mp3-player';
import URLInput from './url_input.js';
import ReactAudioPlayer from 'react-audio-player';
import AudioList from './audio_list';

const Index = () => (
  <div style={{ 'text-align': 'center', 'font-family': 'sans-serif' }}>
    <h1>Story Time</h1>
    <p>Convert any article into a mp3 file and stream it!</p>
    <ReactAudioPlayer
      // src="https://storage.cloud.google.com/storytime-audio/Zato%20%E2%80%94%20a%20powerful%20Python-based%20ESB%20solution%20for%20your%20SOA"
      src="http://localhost:5000/Zato%20%E2%80%94%20a%20powerful%20Python-based%20ESB%20solution%20for%20your%20SOA.mp3"
      controls
    ></ReactAudioPlayer>
    <AudioList></AudioList>
    <br />
    <br />
    <br />
    <URLInput></URLInput>
    {/* <Playlist
      tracks={[{ name: 'article', description: 'mehh', src: 'output.mp3' }]}
    ></Playlist> */}
  </div>
);

export default Index;
