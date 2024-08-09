import React from 'react';
import Draggable from 'react-draggable';

const DraggableComponent = () => {
  return (
    <Draggable>
      <div style={{ padding: '20px', background: '#ccc', cursor: 'move' }}>
        Sürükle
      </div>
    </Draggable>
  );
};

export default DraggableComponent;
