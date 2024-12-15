import "./SkeletonElement.css";
/* eslint-disable react/prop-types */
export default function SkeletonElement({ type }) {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
}
