import { Notify } from 'notiflix';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { load, save } from '../../services/localStorage/storage';
import Loader from '../Loader/Loader';

const VideoPlayer = ({ URL, muted }) => {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
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

  const handlePlayerError = e => {
    if (e && e.target && e.target.error && e.target.error.code) {
      switch (e.target.error.code) {
        case 1:
          Notify.warning('The video is not found or has been removed');
          break;
        case 2:
          Notify.warning('The video is not playable in the current browser');
          break;
        case 3:
          Notify.warning('The video has an invalid source');
          break;
        case 4:
          Notify.info('To continue your lesson, please click play button');
          break;
        case 5:
          Notify.warning('The video is too long');
          break;
        case 6:
          Notify.warning('The video is not supported');
          break;
        default:
          Notify.warning('An unknown error occurred while playing the video');
      }
    }
    // else {
    //   Notify.warning('An unknown error occurred while playing the video');
    // }
  };

  return (
    <>
      {isVideoLoading && <Loader />}

      <ReactPlayer
        url={URL}
        width="100%"
        height="100%"
        playing
        loop
        muted={muted}
        controls={true}
        onProgress={handleProgress}
        onReady={() => {
          playerRef.current.seekTo(getVideoProgress());
          setIsVideoLoading(false);
        }}
        onEnded={handleVideoEnd}
        onError={handlePlayerError}
        ref={playerRef}
      />
    </>
  );
};

export default VideoPlayer;
