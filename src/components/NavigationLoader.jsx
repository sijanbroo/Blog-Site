import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function NavigationLoader() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loader when route changes
    setLoading(true);

    // Hide loader after a short delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, [location]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400">
      <div
        className="h-full bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400"
        style={{
          animation: "progress 0.9s ease-in-out forwards",
          width: "100%",
        }}
      />
      <style>{`
        @keyframes progress {
          0% {
            width: 0;
            opacity: 1;
          }
          100% {
            width: 100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
