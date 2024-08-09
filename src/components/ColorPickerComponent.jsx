import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPickerComponent = () => {
  const [color, setColor] = useState('#fff');

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return (
    <div>
      <SketchPicker color={color} onChangeComplete={handleChangeComplete} />
      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: color }}>
        Selected Color: {color}
      </div>
    </div>
  );
};

export default ColorPickerComponent;
