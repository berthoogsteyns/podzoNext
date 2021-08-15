import * as React from "react";
import styles from "../../styles/Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_left}>
        <p className={styles.footer_left_awesomity}>
          Challenge by <span className="">Awesomity Ltd</span>{" "}
        </p>
      </div>
      <div className={styles.footer_right}>
        <p className={styles.footer_right_name}>
          Developed by <span className="">Bert Hoogsteyns</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
