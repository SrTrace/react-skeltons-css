import SkeletonElement from "../SkeletonElement/SkeletonElement";
import "../SkeletonElement/SkeletonElement.css";

export default function SkeletonArticle() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </div>
  );
}
