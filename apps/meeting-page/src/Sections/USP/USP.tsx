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
        {/* Can you use short circuiting to simplify this further? */}
        {imgSource || imgOverlay ? (
          <Overlay imgSource={imgSource} imgOverlay={imgOverlay}>
            {children}
          </Overlay>
        ) : (
          <>{children}</>
        )}
      </div>
    </div>
  );
};

export default Usp;
