import classes from "./App.module.css";
import Hero from "./Sections/Hero/Hero";

import USP from "./Sections/USP/USP";

function App() {
  return (
    <div className={classes.root}>
      <Hero />

      <USP step={1}>
        <div>PICTURES</div>
        <p>Built for modern use</p>
        <h2>Smarter meetings, all in one place</h2>

        <p>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </USP>

      <USP step={2}>
        <h2>Experience more together</h2>
        <p>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>

        <button>Download v1.3</button>
      </USP>
    </div>
  );
}

export default App;
