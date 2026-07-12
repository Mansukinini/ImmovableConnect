import React from 'react';
import './Title.css';

function Title({ title, eyebrow, align = 'center', light = false }) {
  return (
    <div className={`title-container ${align} ${light ? 'on-dark' : ''}`}>
      {eyebrow && <span className='title-eyebrow'>{eyebrow}</span>}
      <h2 className='title'>{title}</h2>
    </div>
  );
}

export default Title
