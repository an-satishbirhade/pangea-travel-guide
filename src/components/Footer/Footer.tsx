import { IonCol, IonGrid, IonIcon, IonRow } from '@ionic/react';
import * as React from 'react';
import './Footer.scss';
import { logoTwitter, logoFacebook, logoPinterest, logoInstagram, logoGoogle } from 'ionicons/icons'
interface IFooterProps {
}

const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <IonGrid className='ion-text-center footer'>
      <IonRow className='ion-margin-top ion-padding-horizontal ion-justify-space-between'>
        <IonCol>
          <h4>Company</h4>
          <h6><a href="#">Destination</a></h6>
          <h6><a href="#">Bookings</a></h6>
          <h6><a href="#">Blog</a></h6>
          <h6><a href="#">Contact us</a></h6>
        </IonCol>
        <IonCol>
          <h4>Discover</h4>
          <h6><a href="#">About us</a></h6>
          <h6><a href="#">privacy policy</a></h6>
          <h6><a href="#">Terms of use</a></h6>
          <h6><a href="#">sitemap</a></h6>
        </IonCol>
        <IonCol>
          <h4>Address</h4>
          <p className="ion-text-center ion-text-capitalize ion-text-justify">
            Application Nexus Pvt. Ltd.
            101-105, Center One, Ashoka Marg,
            next to Ashoka Buildcon,
            Nashik, Maharashtra 422 011
            Maharashtra, India.
            Office:+91-253-2236556
          </p>
        </IonCol>
      </IonRow>
      <IonRow >
        <hr />
        <IonCol size='12' className='ion-text-center ion-padding-vertical ion-text-capitalize'>
          Join Us On
        </IonCol>
        <IonCol size='12' className='social-icons ion-text-center'>
          <IonIcon icon={logoFacebook}></IonIcon>
          <IonIcon icon={logoPinterest}></IonIcon>
          <IonIcon icon={logoTwitter}></IonIcon>
          <IonIcon icon={logoInstagram}></IonIcon>
          <IonIcon icon={logoGoogle}></IonIcon>
        </IonCol>
        <IonCol className='ion-text-center ion-text-capitalize'>
          &copy; 2022 PangeaGuides. All Right Reserved
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default Footer;