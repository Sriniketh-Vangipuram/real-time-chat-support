import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

function Input({
  error,
  className,
  ...props
}: InputProps) {

  return (
    <div className="flex w-full flex-col gap-2">

      <input
        {...props}
        className={clsx(
          "h-12 w-full rounded-xl border px-4",
          "bg-white text-sm text-neutral-900",
          "placeholder:text-neutral-400",
          "outline-none",
          "transition-all duration-200",

          "focus:border-black",
          "focus:ring-2 focus:ring-black/10",

          error
            ? "border-red-500"
            : "border-neutral-300",

          className
        )}
      />


      {
        error && (
          <p className="text-sm text-red-500">
            {error}
          </p>
        )
      }


    </div>
  );
}


export default Input;