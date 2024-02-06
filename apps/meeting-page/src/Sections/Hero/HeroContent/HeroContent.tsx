import Button from "src/Components/Button";
import styles from "../Hero.module.css"

const HeroContent = () => {
  return (
    <div>
      <h1>
        <span className={styles["heading-span"]}>group chat</span>
        <span className={styles["heading-span"]}>for everyone</span>
      </h1>
      <p>
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <Button
        default_color="var(--color_hippie-blue)"
        active_color="var(--color_hippie-blue-active)"
      >
        Download v1.3
      </Button>
      <button>What is it?</button>
    </div>
  );
};

export default HeroContent;
