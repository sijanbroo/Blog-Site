import React from "react";

function Logo({ width = "180px", className = "" }) {
  return (
    <img
      src="/blog-logo.png"
      alt="Blog Logo"
      style={{ width, height: "auto" }}
      className={className}
    />
  );
}

export default Logo;
