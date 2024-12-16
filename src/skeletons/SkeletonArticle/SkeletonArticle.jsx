/* eslint-disable react/prop-types */
import SkeletonElement from "../SkeletonElement/SkeletonElement";
import "../SkeletonElement/SkeletonElement.css";
import Shimmer from "../Shimmer/Shimmer";

export default function SkeletonArticle({ theme }) {
  const themeClass = theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <Shimmer />
    </div>
  );
}
