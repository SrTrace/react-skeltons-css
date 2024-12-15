import "../SkeletonElement/SkeletonElement.css";
import SkeletonElement from "../SkeletonElement/SkeletonElement";

export default function SkeletonPofile() {
  return (
    <div className="skeleton-wrapper">
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
    </div>
  );
}
