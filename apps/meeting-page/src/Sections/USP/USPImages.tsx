import styles from "./USP.module.css"

import WomanInVideoCall from "../../assets/image-woman-in-videocall.jpg";
import WomenVideoChatting from "../../assets/image-women-videochatting.jpg";
import MenInMeeting from "../../assets/image-men-in-meeting.jpg";
import ManTexting from "../../assets/image-man-texting.jpg";

const USPImages = () => {
  return (
    <div className={styles["usp-images"]}>
      <img src={WomanInVideoCall} alt="Woman in video call." />
      <img src={WomenVideoChatting} alt="Women in video call." />
      <img src={MenInMeeting} alt="Men in meeting." />
      <img src={ManTexting} alt="Man texting." />
    </div>
  );
  
};

export default USPImages;
