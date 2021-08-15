import * as React from "react";
import { FaGooglePlusG } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { GrSnapchat } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "../../styles/Contact.module.scss";

export const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <h1 className={styles.container_left_header}>Contact us</h1>
        <div className={styles.container_left_info}>
          <p>T: +250 788 000 000</p>
          <p>E: yveshonore14@gmail.com</p>
          <p>A: Kimihurura, Kigali</p>
        </div>
        <div className={styles.container_left_social}>
          <a href="#">
            <FaGooglePlusG />
          </a>
          <a href="#">
            <GrTwitter />
          </a>
          <a href="#">
            <GrSnapchat />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className={styles.container_divider}></div>

      <div className={styles.container_right}>
        <form className={styles.container_right_form}>
          <input
            className={styles.container_right_form_name}
            type="text"
            placeholder="Name"
          />
          <input
            className={styles.container_right_form_email}
            type="text"
            placeholder="Email"
          />
          <textarea
            className={styles.container_right_form_message}
            placeholder="Message"
          />
          <button className={styles.container_right_form_button} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
