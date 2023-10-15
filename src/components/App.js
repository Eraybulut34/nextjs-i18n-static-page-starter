import React from 'react';
import { useState } from 'react';




function App() {
  const [activePanelIndex, setActivePanelIndex] = useState(0);

  const handlePanelClick = (index) => {
    setActivePanelIndex(index === activePanelIndex ? -1 : index);
  };
  const [images,setImages]=useState([{
    id:0,
    url:"/images/images14.jpeg"
  },
  {
    id:1,
    url:"/images/images14.jpeg"
  },
  {
    id:2,
    url:"/images/images15.jpeg"
  },
  {
    id:3,
    url:"/images/images14.jpeg"
  },
])

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
