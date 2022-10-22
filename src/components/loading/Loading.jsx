import React from "react";
import Skeleton from "react-loading-skeleton";

function Loading() {
  return (
    <div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
    </div>
  );
}

export default Loading;
