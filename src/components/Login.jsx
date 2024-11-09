import styles from './Login.module.css';

const Login = () => {
  return (
    <form method='post' action='http://localhost:8585/users/login'>
        <div className="form m-3 d-flex flex-column">
         <h3 className={styles.H3_form}>Login</h3>
          <input type="email" className={styles.Input_form} placeholder="Enter email" name='email'></input>
          <input type="password" className={styles.Input_form} placeholder="Enter password" name='password'></input>

            <button type="submit" className={styles.Btn_form}>Submit</button>
    
        </div>
      </form>
  )
}

export default Login