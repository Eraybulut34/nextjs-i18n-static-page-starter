// VideoComponent2.js

import React from 'react';

const VideoComponent2 = () => {
  return (
    <div className="play">
      <video
        className="vdr"
        autoPlay
        loop
        width="30%"
        height="auto"
      >
        <source src="/images/video7.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      <video
        className="vdr"
        autoPlay
        loop
        width="30%"
        height="auto"
      >
        <source src="/images/video8.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      <video
        className="vdr"
        autoPlay
        loop
        width="30%"
        height="auto"
      >
        <source src="/images/video9.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
    </div>
  );
};

export default VideoComponent2;
