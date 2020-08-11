import React, { useState, useEffect } from 'react';
import Cropper from 'cropperjs';
import "cropperjs/dist/cropper.min.css";
import "./imagecropper.css";

function ImageCropper ({ src }) {

  const [imageDestination, setImageDestination] = useState("")
  const imageElement = React.createRef();
  console.log(imageElement);

  useEffect(() => {
    const cropper = new Cropper(imageElement.current, {
      zoomable: false,
      scalable: false,
      aspectRatio: 16/9,
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        setImageDestination(canvas.toDataURL("image/png"));
      }
    })
  },[imageElement]);

  return (
    <>
      <div className="img-container">
        <img ref={imageElement} alt="Uploaded img" src={src}/>
      </div>
      <img className="img-preview" alt="preview" src={imageDestination} />
    </>
  )
};

export default ImageCropper;
