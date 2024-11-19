import { useState, useRef } from 'react';
export default function ColorPicker() {
  const [color, setColor] = useState('#dbebdd');
  const colorInputRef = useRef(null);

  function onColorChange(e) {
    setColor(e.target.value);
  }

  const divStyle = {
    width: '400px',
    height: '400px',
    border: 'none',
    backgroundColor: color,
    borderRadius: '10px',
    boxShadow: '0 0 5px rgba(0 0 0.2)',
  };

  const buttonStyle = {
    border: 'none',
    backgroundColor: color,
    outline: 'none',
    cursor: 'pointer',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    padding: 0,
    boxShadow: '0 0 5px rgb(0 0 0.2)',
  };

  const inputStyle = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    opacity: 0,
    zIndex: -1,
  };

  const handleButtonClick = () => {
    colorInputRef.current.click();
  };

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        alert(`${color} copied to clipboard`);
      })
      .catch((err) => {
        alert(`Failed to copy color code!`);
      });
  };

  return (
    <main>
      <h1>COLOR PICKER</h1>
      <h2 id="copy" onClick={handleCopyClick}>
        Click to copy color : {color}
      </h2>
      <div style={divStyle}></div>
      <h2>Click below to select color: </h2>
      <button style={buttonStyle} onClick={handleButtonClick} />
      <input
        ref={colorInputRef}
        type="color"
        value={color}
        onChange={onColorChange}
        style={inputStyle}
      />
    </main>
  );
}
