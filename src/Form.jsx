import React from 'react';
import Button from './Button';

function Form({ endPoint, setEndPoint }) {
  return (
    <form className="btns" onSubmit={(e) => e.preventDefault()}>
      <Button endPoint={endPoint} setEndPoint={setEndPoint} btnText="users" />
      <Button endPoint={endPoint} setEndPoint={setEndPoint} btnText="posts" />
      <Button
        endPoint={endPoint}
        setEndPoint={setEndPoint}
        btnText="comments"
      />
    </form>
  );
}

export default Form;
