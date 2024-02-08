import logo from "src/assets/logo.svg";

import HeroMob from "./HeroMob/HeroMob";
import HeroPC from "./HeroPC/HeroPC";
import HeroContent from "./HeroContent/HeroContent";
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <header className="gap">
      <img className={styles["header-logo"]} src={logo} alt="Company Logo" />

      {/*
        use the syntax className={`${styles["img-hero"]}`} to add multiple js or ordinary classes
      */}
      <HeroMob>
        <HeroContent />
      </HeroMob>
      <HeroPC>
        <HeroContent />
      </HeroPC>
    </header>
  );
};

export default Hero;
