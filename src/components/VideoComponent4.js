import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';

const VideoComponent4 = () => {
  const videos = [
    '/images/video13.mp4',
    '/images/video14.mp4',
    '/images/video15.mp4',
  ];
// eslint-disable-next-line
  const videoRefs = videos.map(() => useRef(null));
  const currentVideoIndexRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false); // Başlangıçta video oynatılmıyor.

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
      if (!isPlaying) { // Eğer video oynatılmıyorsa, videoyu oynat
        videoRefs[currentVideoIndexRef.current].current.play();
      }
    }
  };

  const playButtonStyle = {
    backgroundColor: isPlaying ? 'gray' : 'rgb(144, 238, 144)',
    color: 'black',
    padding: '10px',
  };
  
  const playIcon = isPlaying ? (
    <i className="material-icons" style={{ color: 'white' }}>pause</i> // Duraklatma simgesi
  ) : (
    <i className="material-icons" style={{ color: 'white' }}>play_arrow</i> // Oynatma simgesi
  )

  const playButtonText = isPlaying ? 'Pause' : 'Play';

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <div>
        <button onClick={togglePlaying} style={playButtonStyle}>
          {playButtonText}
        </button>
      </div>
      <div className="play" onClick={togglePlaying}>
        {videoRefs.map((videoRef, index) => (
          <video
            key={index}
            className="vdr"
            width="35%"
            height="auto"
            ref={videoRef}
          >
            <source src={videos[index]} type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        ))}
      </div>
    </>
  );
};

export default VideoComponent4;
