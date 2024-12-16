import { useEffect, useState } from "react";
import { client } from "../utils/fetchClient";
import SkeletonArticle from "../skeletons/SkeletonArticle/SkeletonArticle";
import { useTheme } from "../hooks/useTheme";
import Pagination from "./Pagination";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);

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

  // get current article
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles =
    articles.slice(indexOfFirstArticle, indexOfLastArticle) || null;

  // change page
  const paginate = (pageNumeber) => setCurrentPage(pageNumeber);

  return (
    <section className="articles">
      <h2 className="title is-2 has-text-black">Articles</h2>

      {currentArticles &&
        currentArticles.map((article) => (
          <article key={article.id} className="article">
            <h3 className="title is-3 has-text-black">{article.title}</h3>
            <p>{article.body}</p>
          </article>
        ))}

      {currentArticles && (
        <Pagination
          articlesPerPage={articlesPerPage}
          totalArticles={articles.length}
          paginate={paginate}
        />
      )}
      {articles.length === 0 &&
        [1, 2, 3, 5, 6].map((n) => <SkeletonArticle key={n} theme={theme} />)}
    </section>
  );
}
