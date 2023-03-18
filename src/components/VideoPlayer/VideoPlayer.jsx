import { useRef } from 'react';
import ReactPlayer from 'react-player';
import { load, save } from '../../services/localStorage/storage';

// const VideoPlayer = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const savedProgress = localStorage.getItem('videoProgress');
//     if (savedProgress) {
//       const progressData = JSON.parse(savedProgress);
//       setProgress(progressData);
//     }
//   }, []);

//   const handleProgress = state => {
//     setProgress(state.playedSeconds);
//     localStorage.setItem('videoProgress', JSON.stringify(state.playedSeconds));
//   };

//   return (
//     <ReactPlayer
//       url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//       onProgress={handleProgress}
//       onReady={() => player.seekTo(progress)}
//       ref={player => (player = player)}
//     />
//   );
// };

// export default VideoPlayer;

// import { useState, useEffect, useRef } from "react";
// import ReactPlayer from "react-player";

const VideoPlayer = ({ URL, muted }) => {
  //   const [progress, setProgress] = useState(setInitialState());
  const playerRef = useRef(null);

  //   useEffect(() => {
  //     save('videoProgress', { [URL]: progress });
  //   }, [URL, progress]);

  function setInitialState() {
    const videoProgress = load('videoProgress');
    if (videoProgress) {
      console.log(videoProgress);
      if (Object.keys(videoProgress).indexOf(URL) === -1) {
        //Object.keys(videoProgress).indexOf(URL) !== -1)
        // URL in videoProgress
        return 0;
      }
      return parseFloat(videoProgress[URL]);
    }
    return;
  }

  const handleProgress = state => {
    // setProgress(state.playedSeconds);
    save('videoProgress', { [URL]: state.playedSeconds });
  };

  const handleVideoEnd = () => {
    // setProgress(0);

    localStorage.removeItem('videoProgress');
    // console.log(localStorage.getItem('ui-theme')); // null
  };

  const handlePlayerError = error => {
    console.error('An error occurred:', error);
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
      //   playedSeconds={setInitialState()}
      onReady={() => playerRef.current.seekTo(setInitialState())}
      onEnded={handleVideoEnd}
      onError={handlePlayerError}
      ref={playerRef}
    />
  );
};

export default VideoPlayer;
