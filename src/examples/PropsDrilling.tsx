import * as React from 'react';
interface IUseContextProps {
  Name: string
}

const UseContext: React.FunctionComponent<IUseContextProps> = ({ Name }) => {
  return (
    <>
      {/* <First name={Name} /> */}
      {/* <Second name={Name} /> */}
      {/* <Third name={Name} /> */}
    </>
  );
}


export default UseContext;
