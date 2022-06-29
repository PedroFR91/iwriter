import React from 'react';

function Images(props) {
  return (
    <>
      <img src={props.img} alt={props.alt} />
    </>
  );
}

export default Images;
