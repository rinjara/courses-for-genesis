import { useRef } from 'react';
import ReactPlayer from 'react-player';
import { load, save } from '../../services/localStorage/storage';

const VideoPlayer = ({ URL, muted }) => {
  const playerRef = useRef(null);

  const getVideoProgress = () => {
    const videoProgress = load('videoProgress');
    if (videoProgress) {
      if (Object.keys(videoProgress).indexOf(URL) === -1) {
        return 0;
      }
      return parseFloat(videoProgress[URL]);
    }
    return;
  };

  const handleProgress = state => {
    const videoProgress = load('videoProgress') || {};
    videoProgress[URL] = state.playedSeconds;
    save('videoProgress', videoProgress);
  };

  const handleVideoEnd = () => {
    save('videoProgress', { [URL]: 0 });
  };

  const handlePlayerError = error => {
    console.log('An error occurred:', error);
  };

  return (
    <ReactPlayer
      url={URL}
      width="100%"
      height="100%"
      playing
      loop
      muted={muted}
      controls={true}
      onProgress={handleProgress}
      onReady={() => playerRef.current.seekTo(getVideoProgress())}
      onEnded={handleVideoEnd}
      onError={handlePlayerError}
      ref={playerRef}
    />
  );
};

export default VideoPlayer;
