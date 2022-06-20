import { IonLabel, IonInput, IonButton, IonItem, IonBadge } from "@ionic/react";
import React from "react";
import { useForm } from 'react-hook-form'

interface IRegisterProps {
  data: {}
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange"
  });
  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
    localStorage.setItem("userdata", JSON.stringify(data));
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="ion-padding">
      <IonItem>
        <IonLabel position="floating">Name</IonLabel>
        <IonInput {...register("name", { required: true, maxLength: 30 })} placeholder="eg .John Doe" />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Email Address</IonLabel>
        <IonInput {...register("email", { required: true, maxLength: 30 })} type="email" placeholder="eg. JohnDoe@example.com" />
        {errors.email && <IonBadge color="danger">Email is required</IonBadge>}
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Confirm Email</IonLabel>
        <IonInput {...register("cemail", { required: true, maxLength: 30 })} type="email" placeholder="" />
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput {...register("password", { required: true, maxLength: 30 })} type="password" placeholder="eg. @#$%^*" />
        {errors.password && <IonBadge color="danger">Password is required</IonBadge>}
      </IonItem>

      <IonItem>
        <IonLabel position="floating">Confirm Password</IonLabel>
        <IonInput {...register("cpassword", { required: true, maxLength: 30 })} type="password" />
      </IonItem>
      <IonButton className="ion-margin-top" type="submit" expand="block">
        Register
      </IonButton>
    </form>
  );
};

export default Register;