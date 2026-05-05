import React from 'react';
import './Title.css';

function Title({ title }) {
  return (
    <div className='title-container' style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <h2 className='title'>{ title }</h2>
    </div>
  );
}

export default Title
