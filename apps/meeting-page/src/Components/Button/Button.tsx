import { PropsWithChildren, useState } from "react"
import styles from "./Button.module.css"

interface IButton {
  default_color: string;
  active_color: string;
}

const Button = ({children, default_color, active_color}: PropsWithChildren & IButton) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <button
      className={styles.btn}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHovering ? `rgb(${active_color})` : `rgb(${default_color})`,
      }}
    >
      {children}
    </button>
  );
}


export default Button