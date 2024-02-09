import styles from "./Overlay.module.css";
import { PropsWithChildren } from "react";

interface IOverlay {
  imgSource?: string;
  imgOverlay?: string;
}

const Overlay = ({
  imgSource,
  imgOverlay,
  children,
}: IOverlay & PropsWithChildren) => {
  return (
    <>
      <div className={styles["copy"]}>{children}</div>
      <div
        className={`${styles["background-image"]} absolute`}
        style={{
          backgroundImage: `url(${imgSource})`,
        }}
      >
        {imgOverlay && (
          <div
            className={styles["full-dimensions"]}
            style={{
              backgroundColor: `rgba(${imgOverlay}, 0.5)`,
            }}
          ></div>
        )}
      </div>
    </>
  );
};

export default Overlay;
