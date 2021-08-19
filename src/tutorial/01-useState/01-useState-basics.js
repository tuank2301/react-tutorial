import React, { useState } from 'react';

// component name must be uppercase
// must be in the function/component body
// cannot call conditionally

const UseStateBasics = () => {
  const defaultTitle = 'What the hell';
  const [text, setText] = useState(defaultTitle);
  const handleClick = () => {
    if (text === defaultTitle) {
      setText('good hell');
    } else {
      setText(defaultTitle);
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
