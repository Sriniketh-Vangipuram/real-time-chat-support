import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card({ children }: CardProps) {
  return (
    <div className="w-full rounded-3xl border border-neutral-200 bg-white p-8 shadow-lg">
      {children}
    </div>
  );
}

export default Card;