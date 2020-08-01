import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          src={imageUrl}
          alt="images"
          width="500px"
          height="auto"
          id="inputImage"
        />
      </div>
    </div>
  );
};

export default FaceRecognition;
