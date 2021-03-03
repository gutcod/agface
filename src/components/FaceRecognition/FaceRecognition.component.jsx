import React from "react";
import "./FaceRecognition.style.css";

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        {imageUrl ? (
          <img id='inputimage' src={imageUrl} alt='text' width='500px' height='auto' />
        ) : null}
        {boxes.map(box => {
          return (
            <div
              key={box.topRow}
              className='bounding-box'
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
