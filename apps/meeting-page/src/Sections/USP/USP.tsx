import { PropsWithChildren } from "react";
import styles from "./USP.module.css";
import Overlay from "src/Components/Overlay/Overlay";

interface IUSP {
  step: number;
  imgSource?: string;
  imgOverlay?: string;
}

const Usp = ({
  step,
  imgSource,
  imgOverlay,
  children,
}: PropsWithChildren & IUSP) => {
  return (
    <div className={`${styles.usp}`}>
      <div className={styles["step-indicator"]}>
        <div className={styles.line}></div>
        <div className={styles.circle}>
          <p>{step.toString().padStart(2, "0")}</p>
        </div>
      </div>
      <div className={styles["usp-content"]}>
        {/* simply render div with children */}
        {/* If imgSource -> include div with style with ${imgSource} */}
        {/* If imgOverlay -> include div with style and another Overlay component*/}
        {!imgSource && !imgOverlay && <div>{children}</div>}
        {imgSource && (
          <>
            <div className={styles["copy"]}>{children}</div>
            <div
              className={`${styles["background-image"]} ${styles["absolute"]}`}
              style={{
                backgroundImage: `url(${imgSource})`,
              }}
            >
              {imgOverlay && <Overlay imgOverlay={imgOverlay} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Usp;
