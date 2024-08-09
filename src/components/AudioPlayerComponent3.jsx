import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const AudioPlayerComponent = () => {
  return (
    <ReactAudioPlayer
      src="/music/carti_rip.mp3"
      controls
    />
  );
};

export default AudioPlayerComponent;