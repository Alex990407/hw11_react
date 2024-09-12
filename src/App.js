import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home/indes";
import ArticleList from "./components/ArticleList/index";
import Article from "./components/Article";
import styles from "./components/styles/App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      {/* Навигация между страницами */}
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink> {/* Ссылка на главную страницу */}
          </li>
          <li>
            <NavLink to="/articles">Articles</NavLink>{" "}
            {/* Ссылка на список статей */}
          </li>
        </ul>
      </nav>

      <div className={styles.contentContainer}>
        {/* Удален прямой вызов ArticleList, чтобы избежать дублирования */}
        {/* Вместо этого используем маршрутизацию для рендеринга ArticleList */}

        <Routes>
          {/* Маршрут для главной страницы */}
          <Route path="/" element={<Home />} />

          {/* Маршрут для списка статей */}
          <Route path="/articles" element={<ArticleList />} />
          {/* Компонент ArticleList больше не рендерится дважды */}

          {/* Маршрут для отдельной статьи */}
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
