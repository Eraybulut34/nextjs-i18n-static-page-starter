import React, { useRef, useEffect, useState } from 'react';

const VideoComponent = () => {
  const videos = [
    '/images/video4.mp4',
    '/images/video5.mp4',
    '/images/video6.mp4',
  ];
  // eslint-disable-next-line
  const videoRefs = videos.map(() => useRef(null));
  const currentVideoIndexRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoEnded = () => {
    currentVideoIndexRef.current = (currentVideoIndexRef.current + 1) % videos.length;

    videoRefs.forEach((videoRef, index) => {
      if (videoRef.current) {
        videoRef.current.pause();
        if (index === currentVideoIndexRef.current && isPlaying) {
          videoRef.current.play();
        }
      }
    });
  };

  useEffect(() => {
    videoRefs.forEach((videoRef, index) => {
      if (videoRef.current) {
        videoRef.current.addEventListener('ended', handleVideoEnded);

        if (index === currentVideoIndexRef.current && isPlaying) {
          videoRef.current.play();
        }
      }
    });

    return () => {
      videoRefs.forEach((videoRef) => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('ended', handleVideoEnded);
        }
      });
    };
  }, [isPlaying]);

  const togglePlaying = () => {
    setIsPlaying(!isPlaying);
    if (videoRefs[currentVideoIndexRef.current].current) {
      if (isPlaying) {
        videoRefs[currentVideoIndexRef.current].current.pause();
      } else {
        videoRefs[currentVideoIndexRef.current].current.play();
      }
    }
  };

  return (
    <div className="return">
    <div className="play" onClick={togglePlaying}>
      <h3 className="empty">Bim Modeling</h3>
      {videoRefs.map((videoRef, index) => (
        <video
          key={index}
          className="vdr"
          width="25%"
          height="auto"
          ref={videoRef}
        >
          <source src={videos[index]} type="video/mp4" />
          Tarayıcınız video etiketini desteklemiyor.
        </video>
      ))}
    </div>
    </div>
  );
};

export default VideoComponent;