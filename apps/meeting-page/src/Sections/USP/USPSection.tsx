import USP from "./USP";
import USPImages from "./USPImages";
import imgSource from "../../assets/mob-footer.jpg";

const USPSection = () => {
  return (
    <div>
      <USP step={1}>
        <USPImages />
        <p className="hippie-blue">BUILT FOR MODERN USE</p>
        <h2>Smarter meetings, all in one place</h2>

        <p className="oslo-grey">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </USP>

      <USP step={2} imgSource={imgSource} imgOverlay="var(--color_hippie-blue)">
        <h2>Experience more together</h2>
        <p>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>

        <button>Download v1.3</button>
      </USP>
    </div>
  );
};

export default USPSection;
