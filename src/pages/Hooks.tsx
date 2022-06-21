import * as React from 'react';
import UseState from '../examples/UseState';
import UseContext from '../examples/UseContext';
import UseRef from '../examples/UseRef';
interface IHooksProps {
}

const Hooks: React.FunctionComponent<IHooksProps> = (props) => {
  return (
    <>
      <UseState />
      <UseContext Name='Rahul' />
      <UseRef />
    </>
  );
};

export default Hooks;
