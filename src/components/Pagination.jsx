/* eslint-disable react/prop-types */
export default function Pagination({
  articlesPerPage,
  totalArticles,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination gap-2">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
