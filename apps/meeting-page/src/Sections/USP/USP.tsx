import { PropsWithChildren } from "react";
import styles from "./USP.module.css"


interface IUSP {
  step: number;
}

const Usp = ({step, children}: PropsWithChildren & IUSP) => {
  return (
    <div className={styles.usp}>
      <div className={styles["step-indicator"]}>
        <div className={styles.line}></div>
        <div className={styles.circle}>
          <p>{step}</p>
        </div>
      </div>
      {children}
    </div>
  )
};

export default Usp;