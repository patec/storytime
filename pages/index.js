import React from 'react';
// import Playlist from 'react-mp3-player';
import URLInput from './url_input.js';
import AudioList from './audio_list';

const Index = () => (
  <div style={{ textAlign: 'center', 'font-family': 'sans-serif' }}>
    <h1>Story Time</h1>
    <p>Convert any article into a mp3 file and stream it!</p>
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
