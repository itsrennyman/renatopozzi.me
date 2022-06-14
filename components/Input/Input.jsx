import * as React from "react";

const Input = React.forwardRef(({ type = "text", placeholder = "" }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className="bg-zinc-800 border-none focus:ring-2 placeholder:text-zinc-400 text-zinc-400 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:border-zinc-700 block w-full px-4 rounded-lg h-12 sm:text-base border-zinc-700"
      placeholder={placeholder}
    />
  );
});

Input.displayName = "Input";

export { Input };
