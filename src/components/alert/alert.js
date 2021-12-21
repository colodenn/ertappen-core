import React from 'react';
import { positions, transitions } from 'react-alert';

export const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

export const AlertTemplate = ({ style, options, message }) => (
  <div style={style}>
    <div
      className={`alert 
       ${options.type === 'success' && 'alert-success'} ${
        options.type === 'info' && 'alert-info'
      } ${options.type === 'error' && 'alert-error '}
      `}
    >
      <div className='flex-1'>
        {options.type === 'error' ? (
          <h1 className='mr-4'>🚑 </h1>
        ) : (
          <h1 className='mr-4'>🎉 </h1>
        )}

        <label>{message}</label>
      </div>
    </div>
  </div>
);
