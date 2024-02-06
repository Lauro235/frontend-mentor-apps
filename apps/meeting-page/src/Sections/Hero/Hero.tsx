import logo from "src/assets/logo.svg";

import HeroMob from "./HeroMob/HeroMob";
import HeroPC from "./HeroPC/HeroPC";
import HeroContent from "./HeroContent/HeroContent";

const Hero = () => {
  return (
    <div>
      <img src={logo} alt="Company Logo" />

      {/*
        use the syntax className={`${styles["img-hero"]}`} to add multiple js or ordinary classes
      */}
      <HeroMob>
        <HeroContent />
      </HeroMob>
      <HeroPC>
        <HeroContent />
      </HeroPC>
    </div>
  );
};

export default Hero;
