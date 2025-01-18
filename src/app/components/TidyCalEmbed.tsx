"use client";

import React, { useEffect } from "react";

const TidyCalEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="tidycal-embed"
      style={{ backgroundColor: "var(--background)", padding: "1rem", borderRadius: "8px" }}
      data-path="kellys-ruff-life"
    ></div>
  );
};

export default TidyCalEmbed;
