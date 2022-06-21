import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonDatetime, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonPopover, IonRow, IonText } from '@ionic/react';
import { calendarOutline, chevronDownOutline, location } from 'ionicons/icons';
import * as React from 'react';
import './Flights.scss';
import Selector from './AdultChildSelector';
interface IFlightsProps {
}

const Flights: React.FunctionComponent<IFlightsProps> = (props) => {
  const [checkIn, setCheckin] = React.useState('');
  const [checkOut, setCheckout] = React.useState('');
  const [showDestination, setshowDestination] = React.useState(true)
  return (
    <IonGrid className='flights'>
      <IonRow className='selectors'>
        <IonCol size='12'>
          <IonText>
            <h1>Find Cheap Flights</h1>
          </IonText>
        </IonCol>
        <IonCol size='12' className='ion-margin-vertical'>
          <IonButton onClick={() => {
            setshowDestination(true)
          }} color={'tertiary'} fill='solid'>Round Trip</IonButton>
          <IonButton onClick={() => {
            setshowDestination(false)
          }} color={'light'} fill='solid'>One Way</IonButton>
        </IonCol>
        {showDestination && <IonCol className='ion-padding-horizontal'>
          <IonLabel>From</IonLabel>
          <IonItem>
            <IonInput type="text" placeholder='City, Airport, Point of Intrest or Zip Code' >
              <IonButton fill="clear">
                <IonIcon icon={location}></IonIcon >
              </IonButton>
            </IonInput>
          </IonItem >
        </IonCol>}
        <IonCol className='ion-padding-horizontal'>
          <IonLabel> To</IonLabel>
          <IonItem>
            <IonInput type="text" placeholder='City, Airport, Point of Intrest or Zip Code' >
              <IonButton fill="clear">
                <IonIcon icon={location}></IonIcon >
              </IonButton>
            </IonInput>
          </IonItem >
        </IonCol>
        <IonCol>
          <IonLabel>Departing</IonLabel>
          <IonItem className='ion-padding-horizontal'>
            <IonButton id='toggle' slot='end' fill="clear">
              <IonIcon icon={calendarOutline}></IonIcon >
            </IonButton>
            <IonInput value={checkIn} type="text" placeholder='DD/MM/YY'>
            </IonInput>
          </IonItem >
          <IonPopover showBackdrop={false} trigger='toggle'>
            <IonContent>
              <IonDatetime presentation='date' value={checkIn} onIonChange={e => setCheckin(e.detail.value!)}>
              </IonDatetime>
            </IonContent>
          </IonPopover>
        </IonCol>
        <IonCol>
          <IonLabel>Returning</IonLabel>
          <IonItem className='ion-padding-horizontal' >
            <IonButton id='toggle1' slot='end' fill="clear">
              <IonIcon icon={calendarOutline}></IonIcon >
            </IonButton>
            <IonInput value={checkOut} type="text" placeholder='DD/MM/YY'>
            </IonInput>
          </IonItem >
          <IonPopover showBackdrop={false} trigger='toggle1'>
            <IonContent>
              <IonDatetime presentation='date' value={checkOut} onIonChange={e => setCheckout(e.detail.value!)}>
              </IonDatetime>
            </IonContent>
          </IonPopover>
        </IonCol>
        <IonCol>
          <IonLabel>Passengers</IonLabel>
          <IonItem className='small ion-padding-horizontal' >
            <IonButton id='toggle2' slot='end' fill="clear">
              <IonIcon icon={chevronDownOutline}></IonIcon >
            </IonButton>
            <IonInput type="text" placeholder='1'>
            </IonInput>
            <IonPopover showBackdrop={false} trigger='toggle2'>
              <IonContent >
                <Selector title='adults' />
                <Selector title='Childs' />
                <Selector title='Infants' />
              </IonContent>
            </IonPopover>
          </IonItem >
        </IonCol>
        <IonButton className='search-btn'>Search for Now</IonButton>
      </IonRow>
    </IonGrid>
  )
};

export default Flights;
