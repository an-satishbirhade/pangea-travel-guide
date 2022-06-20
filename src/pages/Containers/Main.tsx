import * as React from 'react';
import BlogSection from '../../components/BlogSection/BlogSection';
import Destination from '../../components/Destinations/destination';
import Explore from '../../components/Explore/ExploreCities';
import MainSection from '../../components/MainSection/MainSection';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = () => {
  return (
    <>
      <MainSection />
      <Destination />
      <BlogSection />
      <Explore />
    </>
  );
};

export default Home;
