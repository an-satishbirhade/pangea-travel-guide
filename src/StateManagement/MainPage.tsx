import * as React from 'react';
import Afternoon from './Afternoon';
import Morning from './Morning';
import Night from './Night';
import { initialState } from './reducer';
interface IMainPageProps {
}
const AppContext = React.createContext(initialState);
const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
  return (
    <>
      <Morning />
      <Afternoon />
      <Night />
    </>
  )
};

export default MainPage;
