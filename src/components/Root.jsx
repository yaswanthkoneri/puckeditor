import React from 'react';

export const Root = ({ zones, children }) => {
  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <h1>Form Builder</h1>
      <div className="drop-zone">
        {children}
      </div>
    </div>
  );
}; 