import React, { useState, useEffect, useRef } from 'react';
import Cropper from 'cropperjs';
import "cropperjs/dist/cropper.min.css";
import "./ImageCropper.css";

function ImageCropper ({ src }) {

  const [imageDestination, setImageDestination] = useState(null);
  const imageElement = useRef();
  console.log(imageElement);

  useEffect(() => {
    const cropper = new Cropper(imageElement.current, {
      zoomable: false,
      scalable: false,
      aspectRatio: 16/9,
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        console.log(canvas);
        setImageDestination(canvas.toDataURL("image/png"));
      }
    })
  },[imageElement]);

  return (
    <>
      <div className="img-container">
        <img className="img-box" ref={imageElement} alt="Uploaded img" src={src}/>
      </div>
      <img className="img-preview" alt="preview" src={imageDestination} />
    </>
  )
};

export default ImageCropper;
