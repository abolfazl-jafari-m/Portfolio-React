import styles from "./Greeting.module.css";
import PropTypes from "prop-types";
function Greeting({ isLoggedIn, name }) {
  return (
    <>
      <div className={styles.container}>
        {
          isLoggedIn ? 
         ( <div className={styles.greeting}>
             <p>Welcome Back <span> {name} </span> </p>
          </div>
         )
        :
        <button className={styles.button}>Login</button>
        }

      </div>

     
    </>
  );
}

Greeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  name: PropTypes.string,
};
Greeting.defaultProps = {
  isLoggedIn: false,
  name: "Guess",
};

export default Greeting;
