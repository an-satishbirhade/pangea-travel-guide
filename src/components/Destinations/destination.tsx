import { IonButton, IonCol, IonGrid, IonImg, IonRow } from '@ionic/react';
import * as React from 'react';
import './destination.scss'
import spotmap from '../../assets/spotmap.png'
interface IDestinationProps {
}

const Destination: React.FC<IDestinationProps> = (props) => {
  return (
    <IonGrid>
      <IonRow >
        <IonCol className='first-section' sizeSm='12' sizeMd='6' sizeLg='6'>
          <IonImg className='spotmap' src={spotmap}></IonImg>
        </IonCol>
        <IonCol className='second-section ion-text-start ion-padding-left' sizeSm='12' sizeMd='6' sizeLg='6'>
          <p className='legend'>Destinations</p>
          <p className='subtext'>Explore  The World With Us</p>
          <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, omnis! Debitis cupiditate dicta autem nulla. Quia repellat culpa id, amet inventore eligendi! Laborum, molestiae! Consectetur natus amet repudiandae magnam est!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, odit nulla, necessitatibus ea, fugiat reiciendis expedita inventore amet atque enim blanditiis nemo facere? Similique porro voluptas veniam sunt vitae! Optio.
          </p>
          <IonButton className='btn'>Check Our Destinations</IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  )
};

export default Destination;
