
import { useForm } from 'react-hook-form';
import { LogInData, UserRemoteService } from '../../services/remote/user/User.remote';
import { Input } from '../../shared/components/input/Input.component';
import { useState } from 'react';
import { Submit } from '../../shared/components/submit/Submit.component';
import { useNavigate } from 'react-router-dom';
import twitterIcon from '../../../assets/twitter.svg'
import githubIcon from '../../../assets/github.svg'
import facebookIcon from '../../../assets/facebook.svg'
import styles from './Login.module.scss'

interface SocialButton {
  company: string,
  icon: any
}

const SOCIAL_BUTTONS: SocialButton[] = [{
  company: "twitter",
  icon: twitterIcon
},{
  company: "github",
  icon: githubIcon
},{
  company: "facebook",
  icon: facebookIcon
}]

function Login() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [hasLoginErrors, setHasLoginErrors] = useState<boolean>(false)
  const { register, formState: {errors}, handleSubmit, setFocus } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any): void => {
    setIsLoading(true)

    UserRemoteService.login(data as LogInData).then(() => {
      navigate('/forum')
    }).catch((err) => {
      console.log("err", err)
      setHasLoginErrors(true)
    }).finally(() => {
      setIsLoading(false)
    })
  }

  const handleSocialSubmit = (option: string): void => {
    alert(`Option selected: ${option}\nNOT IMPLEMENTED YET`)
  } 

  return (
    <section className={styles.login}>

      <div className={styles.menu}>
        <h1 className={styles.menu__company}>JUNO</h1>
        <h2 className={styles.menu__title}>Log In!</h2>

        <section className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
              label={'Username or Email'}
              dataTestId="username"
              register={register("username", { required: true, minLength: 4, maxLength: 24 })}
              hasError={hasLoginErrors || errors.username}
              setFocus={() => setFocus("username")}
              validationError={hasLoginErrors? 'Username or password incorrects' : 'Min 4 characters and max 24 characters'}/>

            <Input
              label={'Password'}
              type="password"
              dataTestId="password"
              register={register("password", { required: true, minLength: 8, maxLength: 32 })}
              hasError={errors.password}
              setFocus={() => setFocus("password")}
              validationError={'Min 8 characters and max 32 characters'}/>

            <Submit text={'Log In now'} isLoading={isLoading}/>
          </form>

          <div className={styles.divider}>
            <div className={styles.element}>OR</div>
          </div>

          <div className={styles.social}>
            {SOCIAL_BUTTONS.map((button: SocialButton, index: number) => 
              <button
                key={index}
                type="button"
                className={`${styles.socialButton} ${styles[`socialButton___${button.company}`]}`}
                onClick={() => handleSocialSubmit(button.company)}>
                <>
                  <img className={styles.socialButton__icon} src={button.icon} alt={`${button.company} signin`}></img>
                  Log in with {button.company}
                </>
              </button>
            )}
          </div>
        </section>

        <footer className={styles.footer}>Need an account? <a className={styles.footer__link} href="/signup">Sign up now!</a></footer>
      </div>
    </section>
  )
}

export default Login