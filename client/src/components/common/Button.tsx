import type { ButtonHTMLAttributes,ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode;
    loading?:boolean;
}

function Button({children,loading=false,className,disabled,...props}:ButtonProps){
    return (
        <button
        disabled={disabled || loading}
        className={clsx(
            "flex h-12 w-full items-center justify-center rounded-xl bg-black text-white",
            "font-medium transition-all duration-200",
            "hover:bg-neutral-800",
            "active:scale-[0.98]",
            "disabled:cursor-not-allowed disabled:opacity-60",
            className
        )}
        {...props}
        >
            {loading? "Loading...":children}
        </button>
    )
}

export default Button;