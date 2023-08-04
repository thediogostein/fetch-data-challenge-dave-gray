import React from 'react';

function Button({ endPoint, setEndPoint, btnText }) {
  return (
    <button
      className={btnText === endPoint ? 'selected' : null}
      type="button"
      onClick={() => setEndPoint(btnText)}
    >
      {btnText}
    </button>
  );
}

export default Button;
