/* eslint-disable react/prop-types */
import "../SkeletonElement/SkeletonElement.css";
import SkeletonElement from "../SkeletonElement/SkeletonElement";
import Shimmer from "../Shimmer/Shimmer";

export default function SkeletonPofile({ theme }) {
  const themeClass = theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-profile">
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
}
