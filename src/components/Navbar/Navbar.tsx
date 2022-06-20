import { IonCol, IonGrid, IonIcon, IonImg, IonLabel, IonRow, IonSegment, IonSegmentButton, IonText } from '@ionic/react';
import * as React from 'react';
import logo from '../../assets/logo.png'
import './Navbar.scss'
import { searchOutline } from 'ionicons/icons';
interface INavbarProps {
  setParentSegment: any
}

const Navbar: React.FC<INavbarProps> = ({ setParentSegment }) => {
  const [segment, setSegment] = React.useState<'home' | 'destinations' | 'Bookings' | 'blog' | 'contact'>('home');
  return (
    <IonGrid className='ion-no-margin ion-no-padding' >
      <IonRow className="navbar" >
        <IonCol sizeSm='12' sizeMd='4'>
          <IonImg className='logo' src={logo} alt="Travel-Guide-Logo" />
        </IonCol>
        <IonCol sizeSm='12' sizeMd='8' className='segments ion-padding-horizontal'>
          <IonSegment value={segment} scrollable onIonChange={(e) => {
            setSegment(e.detail.value as any)
            setParentSegment(e.detail.value as string)
          }}>
            <IonSegmentButton value="Home">
              <IonLabel>Home</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="Destinations">
              <IonLabel>Destinations</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="Bookings">
              <IonLabel>Bookings</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="Blogs">
              <IonLabel>Blog</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ContactUs">
              <IonLabel>Contact us
              </IonLabel>
            </IonSegmentButton>
            {/* <IonSegmentButton value="searchbar">
              <IonIcon className="search" icon={searchOutline}></IonIcon>
            </IonSegmentButton> */}
          </IonSegment>
        </IonCol>
      </IonRow >
    </IonGrid>
  );
};

export default Navbar;
