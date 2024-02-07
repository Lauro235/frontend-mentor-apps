import heroFull from "src/assets/mob_tab-hero.png";
import styles from "../Hero.module.css";
// import styles from "./HeroMob.module.css";
import { PropsWithChildren } from "react";

const HeroMob = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {/*
        use the syntax className={`${styles["img-hero"]}`} to add multiple js or ordinary classes
      */}
      <div className={styles["mob-hero"]}>
        <img src={heroFull} alt="hero banner" />
        {children}
      </div>
    </div>
  );
};

export default HeroMob;
