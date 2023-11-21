import { useRef } from 'react';

const InputModal = (props) => {
  const { startRef, endRef, codeRef, nameRef } = props;
  return (
    <div className="InputModal">
      <label>code:</label>
      <input type="text" ref={codeRef} />
      <label>name:</label>
      <input type="text" ref={nameRef} />
      <label>start</label>
      <input type="date" ref={startRef} />
      <label>end:</label>
      <input type="date" ref={endRef} />
    </div>
  );
};

export default InputModal;
