import { IonButton, IonCol, IonGrid, IonIcon, IonInput, IonItem, IonRow, IonText } from '@ionic/react';
import * as React from 'react';
import city from '../../assets/city.png';
import './Contact.scss';
import { logoFacebook, logoTwitter, logoGoogle } from 'ionicons/icons';
interface IContactProps {
}

const Contact: React.FC<IContactProps> = (props) => {
  return (
    <IonGrid className='contact ion-no-margin ion-no-padding'>
      <IonRow>
        <img src={city} alt="" />
      </IonRow>
      <IonRow className='social-icons'>
        <IonCol offset='1'>
          <p className='talk'>TALK TO US</p>
        </IonCol>
        <IonCol push='1'>
          <IonButton href='https://www.facebook.com/applicationnexus/' target='_blank' fill='clear'>
            <IonIcon slot='start' color={'tertiary'} icon={logoFacebook} />
            <IonText color={'medium'}>FACEBOOK</IonText>
          </IonButton>
          <IonButton href='https://twitter.com/nexustalk' fill='clear'>
            <IonIcon slot='start' color={'primary'} icon={logoTwitter} />
            <IonText color={'medium'}>TWITTER</IonText>
          </IonButton>
          <IonButton href='https://www.applicationnexus.com/contact-us/' fill='clear'>
            <IonIcon slot='start' color={'danger'} icon={logoGoogle} />
            <IonText color={'medium'}>GOOGLE PLUS</IonText>
          </IonButton>
        </IonCol>
      </IonRow >
      <IonRow>
        <IonCol offset='1'>
          <p className='legend'><span>Get in</span> touch with us
          </p>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernature aut odit </p>
        </IonCol>
      </IonRow>
      <IonRow className='form-details'>
        <IonCol size='3' offset='1'><h2>Our Office </h2>
          <p className="address ion-text-center ion-text-capitalize ion-text-justify">
            Application Nexus Pvt. Ltd.
            101-105, Center One, Ashoka Marg,
            next to Ashoka Buildcon,
            Nashik, Maharashtra 422 011
            Maharashtra, India.
          </p>
          <p>Office:- +91-253-2236556</p>
          <p>Email:- info@applicationnexus.com</p>
        </IonCol>
        <IonCol size='7' offset='1' className='contact-form'>
          <h2>Contact Us</h2>
          <form>
            <IonGrid>
              <IonRow className='ion-margin-vertical'>
                <IonCol>
                  <IonItem>
                    <IonInput placeholder="Your Name *"></IonInput>
                  </IonItem>
                </IonCol>
                <IonCol className='ion-margin-horizontal'>
                  <IonItem>
                    <IonInput placeholder="Your Email *"></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow className='ion-margin-vertical'>
                <IonCol size='12'><IonItem>
                  <IonInput placeholder="Subject *"></IonInput>
                </IonItem></IonCol>
                <IonCol className='ion-margin-vertical' size='12'><IonItem>
                  <IonInput placeholder="Message *"></IonInput>
                </IonItem></IonCol>
                <IonButton className='btn ion-text-capitalize ion-margin-vertical'>Send Email</IonButton>
              </IonRow>
            </IonGrid>
          </form>
        </IonCol>
      </IonRow>
    </IonGrid >
  );
};

export default Contact;
