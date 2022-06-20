import * as React from 'react';
import UseState from '../examples/UseState';
import UseContext from '../examples/UseContext';
interface IHooksProps {
}

const Hooks: React.FunctionComponent<IHooksProps> = (props) => {
  return (
    <>
      <UseState />
      <UseContext Name='Rahul' />
    </>
  );
};

export default Hooks;
