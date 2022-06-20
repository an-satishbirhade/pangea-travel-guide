import * as React from 'react';
import Third from './Third';

interface ISecondProps {
}

const Second: React.FunctionComponent<ISecondProps> = () => {
  return (
    <>
      <h1>Name in Second</h1>
      <Third />
    </>
  )
};

export default Second;
