
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SingUpData, UserRemoteService } from '../../services/remote/user/User.remote';
import { Input } from '../../shared/components/input/Input.component';
import { Submit } from '../../shared/components/submit/Submit.component';
import styles from './Signup.module.scss'

function Signup() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { register, handleSubmit, setFocus } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any): void => {
    setIsLoading(true)

    UserRemoteService.signup(data as SingUpData).then(() => {
      alert("Successful registration")
      navigate('/login')
    }).catch((err) => {
      console.log("There has been an error", err) 
    }).finally(() => {
      setIsLoading(true)
    })
  }

  return (
    <section className={styles.signup}>
      <div className={styles.menu}>

        <h1 className={styles.menu__company}>JUNO</h1>
        <h2 className={styles.menu__title}>Register. It's free!</h2>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

          <Input
            label={'Name'}
            dataTestId="name"
            register={register("name", { required: true, minLength: 2, maxLength: 24 })}
            setFocus={() => setFocus("name")}
            validationError={'Min 2 characters and max 24 characters'}/>

          <Input
            label={'Surname'}
            dataTestId="surname"
            register={register("surname", { required: true, minLength: 2, maxLength: 50 })}
            setFocus={() => setFocus("surname")}
            validationError={'Min 2 characters and max 50 characters'}/>

          <Input
            label={'Username or Email'}
            dataTestId="username"
            register={register("username", { required: true, minLength: 4, maxLength: 24  })}
            setFocus={() => setFocus("username")}
            validationError={'Min 4 characters and max 24 characters'}/>

          <Input
            label={'Password'}
            dataTestId="password"
            type={"password"}
            register={register("password", { required: true, minLength: 8, maxLength: 32 })}
            setFocus={() => setFocus("password")}
            validationError={'Min 8 characters and max 32 characters'}/>

          <Submit
            text={'Sign up'}
            isLoading={isLoading}/>
        </form>
      </div>
    </section>
  )
}

export default Signup