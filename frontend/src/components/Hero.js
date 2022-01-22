import React from 'react';

const Hero = () => {
  return (
    <>
      <div
        className='hero full-width'
        responsive
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.5)), url(${
            process.env.PUBLIC_URL + '/images/motorcycle1.jpg'
          })`,
        }}
      >
        <div className='hero_title'>
          <h1 style={{ color: 'white' }}>Welcome to Urban Steel Horse</h1>
          <div className='arrow bounce'>
            <i className='fa fa-angle-double-down fa-1x'></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
