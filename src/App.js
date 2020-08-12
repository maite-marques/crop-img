import React from 'react';
import ImageDropzone from './components/ImageDropzone';
import ImageCropper from './components/ImageCropper';
import ImgTest from './imagetest.png';
import './App.css';
function App() {

  return (
    <div className="container">
      <div>
        <ImageDropzone />
      </div>
      <div>
        <ImageCropper src={ImgTest} />
      </div>
    </div>
  );
}

export default App;
