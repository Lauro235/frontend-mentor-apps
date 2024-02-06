import { PropsWithChildren, useState } from "react"

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHovering ? active_color : default_color,
      }}
    >
      {children}
    </button>
  );
}


export default Button