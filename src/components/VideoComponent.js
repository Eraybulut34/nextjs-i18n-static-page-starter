import React from 'react';

const VideoComponent = () => {
  return (
    <div className="play">
      <video
        className="vdr"
        autoPlay  // Video otomatik başlasın
        loop  // Video döngüsünü devam ettirsin
        width="30%"  // Genişlik özelliği
        height="auto"  // Yükseklik özelliği (otomatik boyutlandırma)
      >
        <source src="/images/video4.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      <video
        className="vdr"
        autoPlay  // Video otomatik başlasın
        loop  // Video döngüsünü devam ettirsin
        width="30%"  // Genişlik özelliği
        height="auto"  // Yükseklik özelliği (otomatik boyutlandırma)
      >
        <source src="/images/video5.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
      <video
        className="vdr"
        autoPlay  // Video otomatik başlasın
        loop  // Video döngüsünü devam ettirsin
        width="30%"  // Genişlik özelliği
        height="auto"  // Yükseklik özelliği (otomatik boyutlandırma)
      >
        <source src="/images/video6.mp4" type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>
    </div>
  );
};

export default VideoComponent;
