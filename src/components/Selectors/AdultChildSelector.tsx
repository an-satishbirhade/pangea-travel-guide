import { IonButton, IonCard, IonCardContent, IonIcon, IonText, IonTitle } from '@ionic/react';
import * as React from 'react';
import { addOutline, removeOutline } from 'ionicons/icons';
interface IChooseMembersProps {
  title: string
}

const ChooseMembers: React.FunctionComponent<IChooseMembersProps> = ({ title }) => {
  const [members, setMembers] = React.useState(1)
  const increamentCounter = () => {
    setMembers(members + 1)
  }
  const decreamentCounter = () => {
    setMembers(members - 1)
  }
  return (
    <IonCard className='ion-no-margin ion-no-padding ion-justify-content-center'>
      <IonCardContent className='ion-text-center'>
        <h1>Select {title}</h1>
        <IonButton onClick={decreamentCounter} fill='clear'>
          <IonIcon icon={removeOutline} ></IonIcon>
        </IonButton>
        {members}
        <IonButton onClick={increamentCounter} fill='clear'>
          <IonIcon icon={addOutline}></IonIcon>
        </IonButton>
      </IonCardContent>
    </IonCard >
  );
};

export default ChooseMembers;
