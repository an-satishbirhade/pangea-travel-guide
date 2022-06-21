import * as React from 'react';
import Main from './Main';
import Destinations from './Destinations';
import Booking from './Bookings';
import Blog from './Blogs';
import Contact from './ContactUs';
interface IContainerProps {
  setSegment: string
}

const Container: React.FC<IContainerProps> = ({ setSegment }) => {
  const chooseSelectors = (setSegment: any) => {
    if (setSegment === 'Home') {
      return <Main />;
    }
    if (setSegment === 'Destinations') {
      return <Destinations />;
    }
    if (setSegment === 'Bookings') {
      return <Booking />;
    }
    if (setSegment === 'Blogs') {
      return <Blog />;
    }
    if (setSegment === 'ContactUs') {
      return <Contact />;
    }
    return <Main />;
  }
  return (
    chooseSelectors(setSegment)
  );
};

export default Container;
