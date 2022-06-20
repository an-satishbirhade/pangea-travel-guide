import * as React from 'react';
import { IonButton, IonCol, IonGrid, IonRow, IonText, useIonPopover } from '@ionic/react';
import './Header.scss';
import LoginForm from '../Forms/LoginForm';
import RegisterForm from '../Forms/RegisterForm';
interface IHeaderProps {
}
const Header: React.FC<IHeaderProps> = (props) => {
  const [presentLogin, dismissLogin] = useIonPopover(LoginForm, { onHide: () => dismissLogin() });
  const [presentRegister, dismissRegister] = useIonPopover(RegisterForm, { onHide: () => dismissRegister() });
  return (
    <IonGrid className='ion-no-padding'>
      <IonRow className="header">
        <IonCol sizeXs='10' offsetXs='1' sizeSm='12' pushSm='1' sizeMd='12' pushMd='3' sizeLg='12' pushLg='3'>
          <IonButton className='btn' onClick={(e) => {
            presentRegister({
              event: e.nativeEvent,
            })
          }} fill='clear'>SignUp</IonButton>
          <IonText className="vline">|</IonText>
          <IonButton className='btn' onClick={(e) =>
            presentLogin({
              event: e.nativeEvent,
            })
          } fill='clear'> Login</IonButton>
        </IonCol>
      </IonRow>
    </IonGrid >
  )
};

export default Header;
