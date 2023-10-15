import React from 'react';
import { useState } from 'react';




function App() {
  const [activePanelIndex, setActivePanelIndex] = useState(-1);

  const handlePanelClick = (index) => {
    setActivePanelIndex(index === activePanelIndex ? -1 : index);
  };

  return (
    <div className="app">
      <div
        className={`panel ${activePanelIndex === 0 ? 'active' : ''}`}
        style={{ backgroundImage: 'url(/images/images9.png)' }}
        onClick={() => handlePanelClick(0)}
      >
        
      </div>
      <div
        className={`panel ${activePanelIndex === 1 ? 'active' : ''}`}
        style={{ backgroundImage: 'url(/images/images10.png)' }}
        onClick={() => handlePanelClick(1)}
      >
        
      </div>
      <div
        className={`panel ${activePanelIndex === 2 ? 'active' : ''}`}
        style={{ backgroundImage: 'url(/images/images13.jpeg)' }}
        onClick={() => handlePanelClick(2)}
      >
        
      </div>
      <div
        className={`panel ${activePanelIndex === 3 ? 'active' : ''}`}
        style={{ backgroundImage: 'url(/images/images14.jpeg)' }}
        onClick={() => handlePanelClick(3)}
      >
        
      </div>
    </div>
  );
}

export default App;
