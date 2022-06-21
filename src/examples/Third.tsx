import * as React from 'react';
import { DemoContext } from './UseContext';
interface IThirdProps {
}

const Third: React.FunctionComponent<IThirdProps> = () => {
  const Name = React.useContext(DemoContext);
  return (
    <h1>Name in Third {Name}</h1>
  )
};

export default Third;
