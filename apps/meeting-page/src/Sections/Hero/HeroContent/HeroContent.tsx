import Button from "src/Components/Button/Button";
import styles from "../Hero.module.css";

const HeroContent = () => {
  return (
    <div className="gap">
      <h1 style={{
        marginTop: '2rem'
      }}>
        <span className={styles["heading-span"]}>group chat</span>
        <span className={styles["heading-span"]}>for everyone</span>
      </h1>
      <p className={styles['tagline']}>
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <div className={styles['btn-container']}>
        <Button
          default_color="var(--color_hippie-blue)"
          active_color="var(--color_hippie-blue-active)"
        >
          <span>Download</span> <span className={styles['bleu']}>v1.3</span>
        </Button>
        <Button
          default_color="var(--color_deep-lavander)"
          active_color="var(--color_deep-lavander-active)"
        >
          What is it?
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
