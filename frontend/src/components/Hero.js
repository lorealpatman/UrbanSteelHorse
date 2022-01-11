import React from 'react';
import { Link } from 'react-scroll';
import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <>
      <div
        className='hero'
        responsive
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + '/images/motorcycle1.jpg'
          })`,
        }}
      >
        <div className='hero_title'>
          <h1 style={{ color: 'white' }}>Welcome to Urban Steel Horse</h1>
          <Link to='main' spy={true}>
            <Button variant='outline-success'>Enter</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
