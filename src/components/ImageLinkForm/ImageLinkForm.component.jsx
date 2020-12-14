import React from "react";
import "./ImageLinkForm.style.css";
const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <div className='center'>
        <div className=' center form pa4 br3 shadow-5'>
          <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />
          <button
            className='w-30 grow br2 f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
