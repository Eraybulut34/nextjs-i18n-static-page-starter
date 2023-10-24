import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';


const VideoComponent3 = () => {
  const videos = [
    '/images/video10.mp4',
    '/images/video11.mp4',
    '/images/video12.mp4',
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

  // Düğmenin görünümünü oynatma durumuna göre özelleştirme
  const playButtonStyle = {
    backgroundColor: isPlaying ? 'gray' : 'rgb(144, 238, 144)', // Lacivert ve açık yeşil/turkuaz rengi
    color: 'black',
    padding: '10px', // 10px iç boşluk
    // Diğer stillendirme özellikleri buraya eklenebilir.
  };
  
  const playIcon = isPlaying ? (
    <i className="material-icons" style={{ color: 'white' }}>play_arrow</i>
  ) : (
    <i className="material-icons" style={{ color: 'white' }}>pause</i>
  );
  

  const playButtonText = isPlaying ? 'Play' : 'Pause';

  return (
    <div className="return">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        {/* Diğer stil ve meta etiketlerini buraya ekleyebilirsiniz */}
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

      {/* Yeni eklenen düğme */}
      
    </div>
  );
};

export default VideoComponent3;
