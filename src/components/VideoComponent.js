 import React, { useEffect } from 'react';

const VideoComponent = () => {
  useEffect(() => {
    const video1 = document.getElementById('myVideo1');
    if (video1) {
      video1.play();
    }
  }, []);

  useEffect(() => {
    const video2 = document.getElementById('myVideo2');
    if (video2) {
      video2.play();
    }
  }, []);

  useEffect(() => {
    const video3 = document.getElementById('myVideo3');
    if (video3) {
      video3.play();
    }
  }, []);
  return (
    <div className="play">
     
      <video className="vdr" id="myVideo1" width="40%" height="740" controls={false} loop>
        <source src="/images/video.1.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      
      
      <video className="vdr" id="myVideo2" width="40%" height="740"  controls={false} loop>
        <source src="/images/video.2.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      
      
      <video className="vdr" id="myVideo3" width="40%" height="740" controls={false} loop>
        <source src="/images/video.3.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      
    </div>
  );
};

export default VideoComponent;