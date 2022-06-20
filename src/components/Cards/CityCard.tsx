import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import * as React from 'react';
import './CityCard.scss'
interface ICityCardProps {
  src: string,
  title: string
  description: string
}

const CityCard: React.FunctionComponent<ICityCardProps> = (props) => {
  return (
    <IonCard className='card'>
      <img className='cityimage' src={props.src} />
      <IonCardHeader>
        <IonCardTitle className='cityname'>{props.title} </IonCardTitle>
      </IonCardHeader >
      <IonCardContent>
        <p className='description'>
          {props.description}
        </p>
        <IonButton className='btn'>Explore</IonButton>
      </IonCardContent>
    </IonCard >
  )
};

export default CityCard;
