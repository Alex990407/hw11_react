import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Article {id}</h1>
      <p>This is the content of article {id}.</p>
      <button className={styles.button} onClick={() => navigate("/articles")}>
        Back to Articles
      </button>
    </div>
  );
};

export default Article;
