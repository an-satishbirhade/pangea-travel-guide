import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonIcon, IonImg, IonItem, IonRow } from '@ionic/react';
import * as React from 'react';
import './ExploreCities.scss'
import Card from '../Cards/CityCard';
import cities from './cityData';
interface IExploreProps {
}

const Explore: React.FC<IExploreProps> = (props) => {
  return (
    <IonGrid className='explore'>
      <IonRow>
        <IonCol sizeSm='12' sizeMd='12' size='10' offset='1'>
          <p className='legend'>Top Cities to Explore</p>
        </IonCol>
      </IonRow>
      <IonRow className='card-row'>
        {
          cities.map((city, index) => {
            return (
              <IonCol key={index}>
                <Card src={city.src} title={city.cityname} description={city.description} />
              </IonCol>
            )
          })
        }
      </IonRow>
    </IonGrid >

  )
};

export default Explore;
