import type { FC } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Hero: FC<HeroProps> = ({ title, subtitle, className }) => {
  return (
    <div
      className={`flex flex-col py-20 justify-center items-center rounded-md bg-gradient-to-t from-background to-primary/20 ${className}`}
    >
      <h1 className="text-5xl font-bold mb-6">{title}</h1>
      <p className="text-2xl font-light text-foreground">{subtitle}</p>
    </div>
  );
};
