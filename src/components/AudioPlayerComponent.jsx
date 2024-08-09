import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayerComponent = () => {
  return (
    <ReactAudioPlayer
      src="/music/carti_slay3r.mp3"
      controls
    />
  );
};

export default AudioPlayerComponent;