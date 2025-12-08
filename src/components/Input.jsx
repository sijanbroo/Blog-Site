import React, { forwardRef, useId } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          className="inline-block mb-2 pl-1 text-white font-medium"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        type={type}
        className={`w-full rounded-lg border bg-white/10 text-white placeholder-gray-400 outline-none border-white/20 px-4 py-3 focus:bg-white/20 focus:border-purple-400 duration-200 ${className}`}
        {...props}
      />
    </div>
  );
});

export default Input;
