import React from "react";
import styles from "./style.module.scss";

const CircularLoader = () => {
  return (
    <div className="loading-div">
      <div className={`${styles["circular-loader"]}`}>
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" />
        </svg>
      </div>
    </div>
  );
};

export default CircularLoader;
