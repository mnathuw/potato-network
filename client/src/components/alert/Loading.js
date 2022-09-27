import React from "react";

const Loading = () => {
  return (
    <div
      className="position-fixed w-100 h-100 text-center loading"
      style={{
        background: "#0008",
        color: "white",
        top: 0,
        left: 0,
        zIndex: 50,
      }}
    >
      <svg width="205" height="250" viewBox="0 0 40 50"></svg>
    </div>
  );
};

export default Loading;
