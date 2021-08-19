import React, { useEffect, useRef } from 'react';

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    refContainer.current.focus();
  });
  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
          <button type='submit'>submit</button>
        </div>
      </form>
      <div ref={divContainer}>hell world</div>
    </>
  );
};

export default UseRefBasics;
