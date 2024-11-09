import styles from './Signup.module.css'

const Signup = () => {
  return (
    <form method='post' action='http://localhost:8585/users/register'>
        <div className="form m-3 d-flex flex-column">
         <h3 className={styles.H3_form}>Signup</h3>
          <input type="text" className={styles.Input_form} placeholder="Enter username" name='username'></input>
          <input type="email" className={styles.Input_form} placeholder="Enter email" name='email'></input>
          <input type="password" className={styles.Input_form} placeholder="Enter password" name='password'></input>

            <button type="submit" className={styles.Btn_form}>Submit</button>
    
        </div>
      </form>
  )
}

export default Signup