import React from 'react';
// import Playlist from 'react-mp3-player';
import URLInput from './url_input.js';
import AudioList from './audio_list';
import BasicPage from './basic_page';

const Index = () => (
  <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
    <BasicPage>
      <h1 style={{ padding: '50px' }}>
        Why read an article when it can be read to you?
      </h1>
      <p style={{ width: '75%', margin: 'auto' }}>
        Story Time allows you to submit links to news articles for them to be
        read to you. Our backend converts the article text found in the provided
        links into mp3 files and will then read it back to you!
      </p>
    </BasicPage>
  </div>
);

export default Index;
