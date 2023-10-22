import React, { useEffect, useState } from 'react';

const VideoComponent = () => {
  const [currentVideo, setCurrentVideo] = useState(1);

  useEffect(() => {
    const video1 = document.getElementById('myVideo1');
    const video2 = document.getElementById('myVideo2');
    const video3 = document.getElementById('myVideo3');

    const videos = [video1, video2, video3];

    const playNextVideo = (currentIndex) => {
      const nextIndex = (currentIndex + 1) % videos.length;
      videos[currentIndex].style.display = 'none'; // Şu anki videoyu gizle
      videos[nextIndex].style.display = 'block'; // Bir sonraki videoyu göster
      videos[nextIndex].play(); // Bir sonraki videoyu başlat
      setCurrentVideo(nextIndex);
    };

    videos.forEach((video, index) => {
      video.addEventListener('ended', () => playNextVideo(index));
    });

    // İlk videoyu başlat
    video1.play();
  }, []);

  return (
    <div className="play">
      <video
        className="vdr"
        id="myVideo1"
        width="90%"
        height="740"
        controls
        loop={false}
      >
        <source src="/images/video.1.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      <video className="vdr" id="myVideo2" width="90%" height="740" controls loop={false}>
        <source src="/images/video.2.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      <video className="vdr" id="myVideo3" width="90%" height="740" controls loop={false}>
        <source src="/images/video.3.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
    </div>
  );
};

export default VideoComponent;
