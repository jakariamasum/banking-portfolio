import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";

const Button = forwardRef(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      children,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm";

    const variants = {
      primary:
        "bg-[#7331FD] text-white hover:bg-[#7331FD] active:bg-[#7331FD] focus-visible:ring-[#7331FD]",
      secondary:
        "bg-gray-700 text-white hover:bg-gray-800 active:bg-gray-900 focus-visible:ring-gray-500",
      outline:
        "border border-[#7331FD] text-[#7331FD] bg-white hover:bg-[#7331FD] hover:text-white active:bg-[#7331FD] focus-visible:ring-[#7331FD]",
      ghost:
        "text-gray-700 bg-transparent hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-gray-400",
      danger:
        "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
