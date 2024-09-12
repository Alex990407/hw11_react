import React from "react";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <div>
      <h1 className={styles.title}>Welcome to My Blog</h1>
      <p>This is the homepage. Click on the articles to read more.</p>
    </div>
  );
};

export default Home;
