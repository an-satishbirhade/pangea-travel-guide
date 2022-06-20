import { IonButton, IonCol, IonGrid, IonIcon, IonLabel, IonRow, IonSegment, IonSegmentButton, IonText } from '@ionic/react';
import * as React from 'react';
import './MainSection.scss';
import { airplaneSharp, arrowForwardOutline, bedSharp, carSportSharp, storefrontSharp, walkSharp } from 'ionicons/icons';
import Hotels from '../Selectors/Hotels';
import Selectors from '../Selectors/Selectors';
interface IMainSectionProps {
}

const MainSection: React.FunctionComponent<IMainSectionProps> = (props) => {
  const [segment, setSegment] = React.useState<'Hotels' | 'Flights' | 'Hostels' | 'Car' | 'Activities'>('Hotels');
  return (
    <IonGrid className='ion-no-padding ion-no-margin'>
      <IonRow className='main ion-justify-content-center ion-text-center'>
        <IonCol size='12' className='mtop legend'>
          If it is not fun
        </IonCol>
        <IonCol size='12' className='legend'>
          you are not doing it right
        </IonCol>
        <IonCol size='12'>
          <IonButton className='explore-btn' color={'light'} fill='outline' shape='round'>
            <p> Go Explore Now</p>
            <IonIcon icon={arrowForwardOutline}></IonIcon>
          </IonButton>
        </IonCol>
        <IonCol size='10' offset='1' className='segments'>
          <IonSegment value={segment} scrollable onIonChange={(e) => {
            console.log(e.detail.value)
            setSegment(e.detail.value as any)
          }}>
            <IonSegmentButton layout='icon-start' value="Hotels">
              <IonIcon icon={bedSharp}></IonIcon>
              <IonLabel>Hotels</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton layout='icon-start' value="Flights">
              <IonIcon icon={airplaneSharp}></IonIcon>
              <IonLabel>Flights</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton layout='icon-start' value="Hostels">
              <IonIcon icon={storefrontSharp}></IonIcon>
              <IonLabel>Hostels</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton layout='icon-start' value="Car">
              <IonIcon icon={carSportSharp}></IonIcon>
              <IonLabel>car</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton layout='icon-start' value="Activities">
              <IonIcon icon={walkSharp}></IonIcon>
              <IonLabel>Activities</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonCol>
      </IonRow>
      <IonRow className='segmentdata'>
        <Selectors setSegment={segment} />
      </IonRow>
    </IonGrid>
  );
};

export default MainSection;