import heroRight from "src/assets/image-hero-right.png";
import heroLeft from "src/assets/image-hero-left.png";
import styles from "./HeroPC.module.css";
import { PropsWithChildren } from "react";

const HeroPC = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {/*
        use the syntax className={`${styles["img-hero"]}`} to add multiple js or ordinary classes
      */}

      <div className={styles["pc-hero"]}>
        <img
          className={styles["pc-hero-img"]}
          src={heroLeft}
          alt="hero banner"
        />
        {children}
        <img
          className={styles["pc-hero-img"]}
          src={heroRight}
          alt="hero banner"
        />
      </div>
    </div>
  );
};

export default HeroPC;
