import React from "react";
import letlogo from "../assets/letlogo.png";
import AnimatedPage from "./AnimatedPage";

import styles from "./Section1.module.css";

export default function Section1() {
  return (
    <AnimatedPage>
      <section className={styles.hero_section}>
        <div className={styles.hero_text_container}>
          <h1 className={styles.hero_header}>
            Welcome to LET
            <br />
            <p className={styles.hero_text_type}>Learn, Earn & Teach</p>
          </h1>

          <h3 className={styles.hero_desc}>
            Unlock the full potential of peer-to-peer learning with our
            comprehensive solution, catering to all your educational needs in
            one convenient place
          </h3>
        </div>
        <div className={styles.hero_img_container}>
          <img id="hero_image" src={letlogo} alt="let-logo" />
        </div>
      </section>
    </AnimatedPage>
  );
}
