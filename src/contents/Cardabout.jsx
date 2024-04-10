import React from 'react';

const Cardabout = ({ title, text }) => {
  return (
    <div className="card shadow" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title text-center p-1">{title}</h5>
        <p className="card-text text-center p-1">{text}</p>
      </div>
    </div>
  );
};

export default Cardabout;
