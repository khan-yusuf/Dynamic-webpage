import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='buy'>
      <button className='btn'>Buy Now</button>
    </Link>
  );
}
