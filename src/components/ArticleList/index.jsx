import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const ArticleList = () => {
  const articles = [
    { id: 1, title: "Article 1" },
    { id: 2, title: "Article 2" },
    { id: 3, title: "Article 3" },
  ];

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li className={styles.li} key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;

// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./styles/styles.module.css"; // Подключение стилей

// const articles = [
//   { id: 1, title: "Article 1" },
//   { id: 2, title: "Article 2" },
//   { id: 3, title: "Article 3" },
// ];

// function ArticleList() {
//   return (
//     <div>
//       <h1>Articles</h1>
//       <ul>
//         {articles.map((article) => (
//           <li className={styles.li} key={article.id}>
//             {/* Ссылки на статьи с помощью Link */}
//             <Link to={`/article/${article.id}`}>{article.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ArticleList;
