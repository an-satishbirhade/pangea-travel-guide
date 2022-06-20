import { IonBadge, IonButton, IonCheckbox, IonInput, IonItem, IonLabel } from '@ionic/react';
import { useForm } from 'react-hook-form'
interface ILoginModalProps {
}

const LoginModal: React.FC<ILoginModalProps> = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange"
  });
  const onSubmit = (data: any) => {
    console.log(data);
    localStorage.setItem("username", data.username);
    localStorage.setItem("password", data.password);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ion-padding">
      <IonItem>
        <IonLabel position="floating">Username</IonLabel>
        <IonInput {...register("username", { required: true, maxLength: 30 })} type='text' name="username"
        />
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput {...register("password", { required: true, maxLength: 30 })} type='password' name="password"
        />
      </IonItem>
      <IonItem lines="none">
        <IonLabel>Remember me</IonLabel>
        <IonCheckbox {...register("checkbox", { required: true })} defaultChecked={false} slot="start" />
        {errors.checkbox && <IonBadge color="danger">First name is required</IonBadge>}
      </IonItem>
      <IonButton className="ion-margin-top" type="submit" expand="block">
        Login
      </IonButton>
    </form>
  );
};

export default LoginModal;
