import React from 'react';
import ImageCropper from './components/imagecropper';
import ImageTest from './imagetest.png';
function App() {
  return (
    <div >
      <ImageCropper src={ImageTest}/>
    </div>
  );
}

export default App;
