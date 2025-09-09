import { Eye, EyeClosed } from 'lucide-react'
import { useState } from 'react'
import z from 'zod'
import { GoogleLogo } from '../ui/BrandLogo'
import Divider from '../ui/Divider'
import styles from './SignUp.module.css'
import { type SignUpErrors, SignUpSchema } from './signup.schema'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<SignUpErrors>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const result = SignUpSchema.safeParse({ name, email, password })
    if (!result.success) {
      const errors = z.flattenError(result.error).fieldErrors
      setErrors(errors)
      return
    }
    setErrors({})

    console.log({ name, email, password })
  }

  return (
    <div className={styles.signUpContainer}>
      <header className={styles.signUpHeader}>
        <h2 className='title'>Sign Up</h2>
        <span className={styles.description}>
          Join us now! Sign up to kick-start your journey.
        </span>
      </header>
      <form onSubmit={handleSubmit} className={styles.signUpForm}>
        <div className={styles.inputContainer}>
          <div className={styles.inputLabelContainer}>
            <input
              id='name'
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder=" "
            />
            <label htmlFor='name'>Name</label>
          </div>
          <div className={styles.errorMessageContainer}>
            {errors.name && <p className={styles.errorText}>{errors.name[0]}</p>}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputLabelContainer}>
            <input
              id='email'
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
            />
            <label htmlFor='email'>Email</label>
          </div>
          <div className={styles.errorMessageContainer}>
            {errors.email && <p className={styles.errorText}>{errors.email[0]}</p>}
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputLabelContainer}>
            <input
              id='password'
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
            />
            <label htmlFor='password'>Password</label>
            <button
              type="button"
              aria-label='Toggle Password Visibility'
              className={styles.togglePasswordButton}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ?
                <Eye className={styles.togglePasswordIcon} /> :
                <EyeClosed className={styles.togglePasswordIcon} />
              }
            </button>
          </div>
          <div className={styles.errorMessageContainer}>
            {errors.password && <p className={styles.errorText}>{errors.password[0]}</p>}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.signUpButton}>
            Sign up
          </button>
          <button type='button' className={styles.signUpWithOAuthButton}>
            <GoogleLogo className={styles.oauthLogo} />
            Sign up with Google
          </button>
        </div>
      </form>
      <Divider content='or' />
      <footer className={styles.signUpFooter}>
        <p>Already have an account? <a href=''>Log In</a></p>
      </footer>
    </div>
  )
}

export default SignUp