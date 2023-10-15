import React from 'react';
import { useState } from 'react';




function App({images}) {
  const [activePanelIndex, setActivePanelIndex] = useState(0);

  const handlePanelClick = (index) => {
    setActivePanelIndex(index === activePanelIndex ? -1 : index);
  };


  return (
    <div className="app">
      {images.map((image,index)=>{
        return(
          <div
        className={`panel ${activePanelIndex === index ? 'active' : ''}`}
        style={{ backgroundImage: `url(${image.url})` }}
        onClick={() => handlePanelClick(index)}/>
        )
      })}

    </div>
  );
}

export default App;
