import * as React from 'react';
import First from './First';

interface IUseContextProps {
  Name: string
}
export const DemoContext = React.createContext("Default");

const UseContext: React.FunctionComponent<IUseContextProps> = ({ Name }) => {
  return (
    <DemoContext.Provider value={Name}>
      <First />
    </DemoContext.Provider>
  )
};

export default UseContext;
