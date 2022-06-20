import * as React from 'react';
import Activities from './Activities';
import Car from './Car';
import Flights from './Flights';
import Hostels from './Hostels';
import Hotels from './Hotels';

interface ISelectorsProps {
  setSegment: string;
}

const Selectors: React.FunctionComponent<ISelectorsProps> = ({ setSegment }) => {
  const chooseSelectors = (segment: any) => {
    if (segment === 'Hotels') {
      return <Hotels />;
    }
    if (segment === 'Flights') {
      return <Flights />;
    }
    if (segment === 'Hostels') {
      return <Hostels />;
    }
    if (segment === 'Car') {
      return <Car />;
    }
    if (segment === 'Activities') {
      return <Activities />;
    }

    return <Hotels />;
  }
  return (
    chooseSelectors(setSegment)
  );
};

export default Selectors;
