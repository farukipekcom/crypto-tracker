import React from "react";
import "../styles/Loading.css";
function Loading() {
  return (
    <div>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
