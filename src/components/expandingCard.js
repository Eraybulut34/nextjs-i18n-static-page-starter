import React, { useState } from 'react';


const ExpandingCard = ({ imageSrc, title, content }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  const cardStyle = {
    border: '2px solid #ccc',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    borderRadius: isExpanded ? '0' : '30px', // Genişkenlik durumuna göre border radius ayarı
    width: isExpanded ? '50%' : '200px', // Genişkenlik durumuna göre genişlik ayarı
  };

  const contentStyle = {
    display: isExpanded ? 'block' : 'none',
    padding: '10px',
    borderRadius: '0 0 10px 10px',
  };

  return (
    <div
      className={`expanding-card ${isExpanded ? 'expanded' : ''}`}
      style={cardStyle}
      onClick={toggleExpand}
    >
      <img src={imageSrc} alt={title} />
      <h3>{title}</h3>
      <div className="card-content" style={contentStyle}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ExpandingCard;
