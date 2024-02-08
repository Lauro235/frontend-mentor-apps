import styles from "./App.module.css";
import Hero from "./Sections/Hero/Hero";

import USPSection from "./Sections/USP/USPSection";


function App() {
  return (
    <div className={styles.root}>
      <Hero />
      <USPSection />
    </div>
  );
}

export default App;
