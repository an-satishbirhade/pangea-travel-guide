import { IonButton, IonCard, IonCardContent, IonTitle } from '@ionic/react';
import * as React from 'react';

interface IUseStateDemoProps {
}

const UseStateDemo: React.FunctionComponent<IUseStateDemoProps> = (props) => {
  const [counter, setCounter] = React.useState(0);
  const [UseEffect, setUseEffect] = React.useState('first');
  //Every Time
  React.useEffect(() => {
    console.log("componentWillMount");
    setUseEffect("Second");
  })
  //like ngOninit
  React.useEffect(() => {
    console.log("componentDidMount");
    setUseEffect("Third");
  }, [])
  //ngOnChange
  React.useEffect(() => {
    console.log("componentDidUpdate");
    setUseEffect('Fourth')
  }, [counter]);
  //ngOnDestroy
  React.useEffect(() => {
    return () => {
      console.log("componentWillUnmount");
      return (setUseEffect('Fifth'))
    }
  }, [])



  return (
    <IonCard>
      <IonCardContent className='ion-text-center'>
        <h1>This is Simple UseState Hook Example</h1>
        <IonButton onClick={() => {
          setCounter(counter + 1)
        }}>+</IonButton>
        <IonTitle>{counter}</IonTitle>
        <IonButton onClick={() => {
          setCounter(counter - 1)
        }}>-</IonButton>
        <h1>Check The Terminal</h1>
        {UseEffect}
      </IonCardContent>
    </IonCard>
  );
};

export default UseStateDemo;
