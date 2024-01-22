import React from "react";
import { useState, useEffect } from "react";
import "./Loader.css";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div>
        {loading && (
          <div className="loader-wrapper">
            <div className="pizza-loader"></div>
            <p className="load-name">Loading...</p>
          </div>
        ) }
      </div>
    </>
  );
};

export default Loader;
