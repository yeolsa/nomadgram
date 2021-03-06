import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "shared/formStyles.scss";

const SignupForm = (props, context) => (
  <div className={styles.formComponent}>
    <h3 className={styles.signupHeader}>
      {context.t("Sign up to see photos and videos from your friends.")}
    </h3>
    <button className={styles.button}>
      <Ionicon icon="logo-facebook" fontSize="20px" color="white" /> {context.t("Log in with Facebook")}
    </button>
    <span className={styles.divider}>or</span>
    <form className={styles.form}>
      <input type="email" placeholder="Email" className={styles.textInput} />
      <input type="text" placeholder="Full Name" className={styles.textInput} />
      <input
        type="username"
        placeholder="Username"
        className={styles.textInput}
      />
      <input
        type="password"
        placeholder="Password"
        className={styles.textInput}
      />
      <input type="submit" value="Sign up" className={styles.button} />
    </form>
    <p className={styles.terms}>
      {context.t("By signing up, you agree to our")} <span>{context.t("Terms & Privacy Policy")}</span>.
    </p>
  </div>
);

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
}

export default SignupForm;