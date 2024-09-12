import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home/indes";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import styles from "./components/styles/App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/articles">Articles</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
