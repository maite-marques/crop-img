import React, { useState, useEffect } from 'react';
import {useDropzone} from 'react-dropzone';
import ImageCropper from './ImageCropper';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: grey;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border .24s ease-in-out;
`;

function ImageDropzone(props) {
  const [imgSrc, setImgSrc] = useState(null);
  const { getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles, rejectedFiles) => {
      const currentFile = acceptedFiles[0];
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        if (reader.result !== null){
          setImgSrc(reader.result);
        }
      }, false );
      reader.readAsDataURL(currentFile);
    }
  });

  useEffect(() => {
    console.log(imgSrc);
  }, [imgSrc]);
  
  return (
    <>
      <section className="container">
        <Container {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </Container>
      </section>
      <ImageCropper src={imgSrc}/>
    </>
  );
}

export default ImageDropzone;