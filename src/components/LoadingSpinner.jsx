import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative w-24 h-24">
        {/* Outer rotating ring */}
        <div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-purple-400"
          style={{
            animation: "spin 3s linear infinite",
          }}
        />

        {/* Middle rotating ring (opposite direction) */}
        <div
          className="absolute inset-2 rounded-full border-4 border-transparent border-b-pink-400 border-l-blue-400"
          style={{
            animation: "spin 2s linear reverse infinite",
          }}
        />

        {/* Inner pulsing ring */}
        <div
          className="absolute inset-4 rounded-full border-2 border-transparent border-t-yellow-300 border-r-green-300 border-b-indigo-300 border-l-rose-300"
          style={{
            animation: "spin 1.5s linear infinite",
          }}
        />

        {/* Center dot with pulse */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-3 h-3 bg-linear-to-r from-cyan-400 to-purple-400 rounded-full"
            style={{
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>

        {/* Animated text */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-32 text-center">
          <p className="text-cyan-300 font-semibold text-sm">
            Loading{" "}
            <span style={{ animation: "dots 1.5s steps(4) infinite" }}>.</span>
          </p>
        </div>
      </div>

      {/* Background animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes dots {
          0%,
          20% {
            content: ".";
          }
          40% {
            content: "..";
          }
          60%,
          100% {
            content: "...";
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
