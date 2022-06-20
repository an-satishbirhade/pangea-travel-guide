import { IonContent, IonPage } from '@ionic/react';
import './Home.css';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { useState } from 'react';
import Container from './Containers/Container';
const Home: React.FC = () => {
  const [parentSegment, setSegment] = useState('Home');

  const getChildSegment = (segment: string) => {
    setSegment(segment);
  }
  {
    console.log(parentSegment);
  }
  return (
    <IonPage>
      <IonContent fullscreen={true}>
        <Header />
        <Navbar setParentSegment={getChildSegment} />
        <Container setSegment={parentSegment} />
        <Footer />
      </IonContent>
    </IonPage >
  );
};

export default Home;
