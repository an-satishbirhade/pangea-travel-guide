import * as React from 'react';
import Second from './Second';

interface IFirstProps {
}

const First: React.FunctionComponent<IFirstProps> = () => {
  return (
    <>
      <h1>Name in First </h1>
      <Second />
    </>
  )
};

export default First;
