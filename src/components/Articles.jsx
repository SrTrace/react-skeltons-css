import { useEffect, useState } from "react";
import { client } from "../utils/fetchClient";
import SkeletonArticle from "../skeletons/SkeletonArticle/SkeletonArticle";
import { useTheme } from "../hooks/useTheme";

export default function Articles() {
  const [articles, setArticles] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await client.get("/posts");
        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };

    getArticles();
  }, []);
  return (
    <section className="articles">
      <h2>Articles</h2>

      {articles &&
        articles.map((article) => (
          <article key={article.id} className="article">
            <h3>{article.title}</h3>
            <p>{article.body}</p>
          </article>
        ))}

      {!articles &&
        [1, 2, 3, 5, 6].map((n) => <SkeletonArticle key={n} theme={theme} />)}
    </section>
  );
}
