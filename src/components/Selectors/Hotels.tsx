import { IonButton, IonCol, IonContent, IonDatetime, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonPopover, IonRow, IonText } from '@ionic/react';
import { location, calendarOutline, chevronDownOutline } from 'ionicons/icons';
import * as React from 'react';
import AdultChildSelector from './AdultChildSelector';
import './Hotels.scss'
interface IHotelsProps {
}

const Hotels: React.FC<IHotelsProps> = (props) => {
  const [checkIn, setCheckin] = React.useState('');
  const [checkOut, setCheckout] = React.useState('');
  return (
    <IonGrid className='details'>
      <IonRow className='selectors'>
        <IonCol size='12'>
          <IonText>
            <h1>Find Hotels</h1>
          </IonText>
        </IonCol>
        <IonCol className='ion-padding-horizontal'>
          <IonLabel>where do you want to go?</IonLabel>
          <IonItem >
            <IonInput type="text" placeholder='City, Airport, Point of Intrest or Zip Code' >
              <IonButton fill="clear">
                <IonIcon icon={location}></IonIcon >
              </IonButton>
            </IonInput>
          </IonItem >
        </IonCol>
        <IonCol>
          <IonLabel>Check-In</IonLabel>
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
          <IonLabel>Check-Out</IonLabel>
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
          <IonLabel>Adults</IonLabel>
          <IonItem className='small ion-padding-horizontal' >
            <IonButton id='toggle3' slot='end' fill="clear">
              <IonIcon icon={chevronDownOutline}></IonIcon >
            </IonButton>
            <IonInput type="text" placeholder='1'>
            </IonInput>
          </IonItem >
          <IonPopover showBackdrop={false} trigger='toggle3'>
            <IonContent>
              <AdultChildSelector title='adults' />
            </IonContent>
          </IonPopover>
        </IonCol>
        <IonCol >
          <IonLabel>Childs</IonLabel>
          <IonItem className='small ion-padding-horizontal' >
            <IonButton id='toggle4' slot='end' fill="clear">
              <IonIcon icon={chevronDownOutline}></IonIcon >
            </IonButton>
            <IonInput type="text" placeholder='0'>
            </IonInput>
          </IonItem >
          <IonPopover showBackdrop={false} trigger='toggle4'>
            <IonContent>
            </IonContent>
            <AdultChildSelector title='childs' />
          </IonPopover>
        </IonCol>
        <IonButton className='search-btn'>Search for Now</IonButton>
      </IonRow>
    </IonGrid>
  )
};

export default Hotels;