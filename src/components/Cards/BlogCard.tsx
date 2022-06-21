import * as React from 'react';
import { IonCard, IonCardContent, IonCol, IonGrid, IonImg, IonRow } from '@ionic/react';
import './BlogCard.scss';

interface IBlogCardProps {
  CardData: any
}
const BlogCard: React.FunctionComponent<IBlogCardProps> = ({ CardData }) => {

  return (
    <IonCard className='blogcard'>
      <IonCardContent className='ion-no-padding ion-no-margin'>
        <IonGrid className='ion-no-padding ion-no-margin' >
          <IonRow>
            <IonCol>
              <img src={CardData}></img>
            </IonCol>
            <IonCol>
              <p>{CardData.title}</p>
              <p>{CardData.date}</p>
              <p>{CardData.description}</p>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard >
  )
};

export default BlogCard;
