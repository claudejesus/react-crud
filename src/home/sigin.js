// Overlay use className props to pass style properties to child component.
// To make this component work add className props to your child component manually.
// Here an example: https://gist.github.com/Miniplop/8f87608f8100e758fa5a4eb46f9d151f

import React from "react";
import { InputField, PasswordInputField } from "components";
import styles from "./Signin.module.scss";

const Signin = () => {
  return (
    <div className={styles.signin}>
      <div className={styles.nav}>
        <img
          alt=""
          className={styles.logoRemovebgPreview1}
          src="https://static.overlay-tech.com/assets/8f3e0555-bacf-4f0b-b14c-3cbd14b4671b.png"
        />
        <div className={styles.group2}>
          <img
            alt=""
            className={styles.vector}
            src="https://static.overlay-tech.com/assets/a8b206e0-e715-4c35-b067-97eeb389cfb0.svg"
          />
          <p className={styles.english}>English</p>
          <img
            alt=""
            className={styles.vector1}
            src="https://static.overlay-tech.com/assets/db06dfc0-c59d-4421-b856-37ae515a1e39.svg"
          />
        </div>
        <div className={styles.group3}>
          <p className={styles.home}>Home</p>
        </div>
      </div>
      <div className={styles.relativeWrapperOne}>
        <div className={styles.group27}>
          <div className={styles.group28}>
            <p className={styles.login}>Login</p>
            <div className={styles.rectangle87} />
          </div>
          <div className={styles.button}>
            <p className={styles.signIn}>Sign In</p>
          </div>
          <div className={styles.group29}>
            <p className={styles.youDontHaveAnAccount}>
              You don’t have an account?{" "}
            </p>
            <p className={styles.signUp}>Sign up.</p>
          </div>
        </div>
        <p className={styles.forgotPassword}>
          Forgot Password ?
        </p>
        <p className={styles.rememberMe}>Remember me</p>
        <InputField className={styles.inputField} />
        <PasswordInputField
          className={styles.passwordInputField}
        />
        <div className={styles.rectangle95} />
      </div>
      <div className={styles.group30}>
        <p className={styles.copyright}>
          Copyright &#64;hotoffers
        </p>
        <div className={styles.line1} />
        <p className={styles.copyright}>Privacy Policy</p>
      </div>
      <div className={styles.group26}>
        <div className={styles.ellipse1} />
        <div className={styles.ellipse2} />
      </div>
      <div className={styles.group31}>
        <div className={styles.ellipse1} />
        <div className={styles.ellipse2Two} />
      </div>
    </div>
  );
};

export default Signin;