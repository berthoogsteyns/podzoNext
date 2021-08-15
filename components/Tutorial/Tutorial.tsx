import * as React from "react";
import Image from "next/image";
import styles from "../../styles/Tutorial.module.scss";
import phone from "../../public/phone.png";
import one from "../../public/step1.png";
import two from "../../public/step2.png";
import three from "../../public/step3.png";

export const Tutorial = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_tutorial}>
        <h1 className={styles.container_tutorial_header}>How it works</h1>
        <div className={styles.container_tutorial_steps}>
          <div className={styles.container_tutorial_steps_step}>
            <div
              style={{ marginBottom: "1rem" }}
              className={styles.container_tutorial_steps_step_image}
            >
              <Image alt="" src={one} />
            </div>
            <h2>Step uno</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt .
            </p>
          </div>
          <div className={styles.container_tutorial_steps_step}>
            <div className={styles.container_tutorial_steps_step_image}>
              <Image alt="" src={two} />
            </div>
            <h2>Step dos</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt .
            </p>
          </div>
          <div className={styles.container_tutorial_steps_step}>
            <div className={styles.container_tutorial_steps_step_image}>
              <Image alt="" src={three} />
            </div>
            <h2>Step tres</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt .
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container_getapp}>
        <div className={styles.container_getapp_phone}>
          <Image alt="" src={phone} />
        </div>
        <div className={styles.container_getapp_right}>
          <h2 className={styles.container_getapp_right_header}>Get the app</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <button
            value="submit"
            className={styles.container_getapp_right_button}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};
