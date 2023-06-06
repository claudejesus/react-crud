import React from "react";
import styles from "./load";

const Component1 = () => {
  return (
    <div className={styles.component1}>
      <div className={styles.frame92}>
        <p className={styles.hotOffers}>Hot Offers</p>
      </div>
      <div className={styles.frame93}>
        <p className={styles.resetNewPassword}>
          Reset New Password{" "}
        </p>
        <div className={styles.component1}>
          <div className={styles.input}>
            <div className={styles.rectangle2} />
            <p className={styles.email}> Email</p>
          </div>
          <div className={styles.input}>
            <div className={styles.rectangle2} />
            <p className={styles.createPassword}>
              {" "}
              Create Password
            </p>
          </div>
          <div className={styles.input}>
            <div className={styles.rectangle2} />
            <p className={styles.email}>
              {" "}
              Confirm Password
            </p>
          </div>
          <div className={styles.frame89}>
            <p className={styles.submit}>Submit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;