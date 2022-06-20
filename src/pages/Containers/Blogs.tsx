import * as React from 'react';
import axios from 'axios';
interface IBlogProps {

}

const Blog: React.FC<IBlogProps> = (props) => {
  const [person, setPerson] = React.useState([])

  const getData = () => {
    axios.get('http://192.168.122.1:3000/').then((responseData: any) => {
      setPerson(responseData);
      console.log(responseData);
    }).catch((err) => console.log("Error:", err)
    )
  }
  React.useEffect(() => {
    getData();
  }, [])

  return (
    <h1>
      {JSON.stringify(person)}
    </h1>
  )
};

export default Blog;
