import { IonButton, IonCol, IonGrid, IonImg, IonRow } from '@ionic/react';
import * as React from 'react';
import './BlogSection.scss'
import sectionimage from '../../assets/blogsectionimg.png'
interface IBlogSectionProps {
}

const BlogSection: React.FunctionComponent<IBlogSectionProps> = (props) => {
  return (
    <IonGrid className='container'>
      <IonRow>
        <IonCol sizeSm='12' sizeMd='4' sizeLg='4' className='blogsection' >
          <p className='legend ion-text-start'>
            From The Road
          </p>
          <p className='desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dicta enim autem repellat nam ad modi vitae illum labore voluptatem! Quam natus cum quia, inventore eius suscipit maiores perspiciatis consequatur?
          </p>
          <IonButton className='btn ion-text-center'>Check Our Blogs</IonButton>
        </IonCol>
        <IonCol size='8'>
          <IonImg className='blogimage' src={sectionimage}></IonImg>
        </IonCol>
      </IonRow>
    </IonGrid>
  )
};

export default BlogSection;
