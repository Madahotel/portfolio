import React from "react";

export function Button({
  children,
  className = "",
  variant = "default",
  type = "button",
  ...props
}) {
  const base =
    "px-5 py-2 rounded-2xl font-medium transition-all duration-300";

  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "border border-white text-white hover:bg-white hover:text-indigo-700",
  };

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
