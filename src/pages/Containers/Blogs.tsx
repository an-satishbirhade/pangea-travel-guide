import { IonCol, IonGrid, IonRow } from '@ionic/react';
import * as React from 'react';
import axios from 'axios';
import BlogCard from '../../components/Cards/BlogCard';
import './Blogs.scss';
interface IBlogProps {

}
const Blog: React.FC<IBlogProps> = (props) => {
  const [cardData, setCardData] = React.useState([]);

  React.useEffect(() => {
    getBlogsData();
  }, []);

  const getBlogsData = async () => {
    await axios.get('http://192.168.122.1:3000/blogs').then((jsonResponse) => {
      setCardData(jsonResponse.data);
      console.log(jsonResponse.data);
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <IonGrid className='blogs'>
      <IonRow className='ion-margin-vertical'>
        <IonCol className='ion-margin-vertical' color={'medium'} >
          <p className='heading'>Latest Blog</p>
          <p className='content'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus odit atque perspiciatis dolores ad. Numquam, porro, quaerat magni incidunt perspiciatis quisquam
          </p>
        </IonCol>
      </IonRow>
      <IonRow className='blogs-grid'>
        {cardData.map((singleCard, index) => {
          return (<IonCol key={index} size='6'>
            <BlogCard CardData={singleCard} />
          </IonCol>
          )
        })}
      </IonRow>
    </IonGrid >
  )
};

export default Blog;
