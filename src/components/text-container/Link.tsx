import React, { type ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  href?: string;
};

const Link = ({ children, href }: LinkProps) => {
  return (
    <a
      href={href}
      className="text-[1.3em] transition-colors duration-300 first-letter:font-bold bg-gradient-to-r from-violet-700 via-cyan-400 to-blue-500 hover:text-transparent bg-clip-text animate-gradient bg-300%"
    >
      {children}
    </a>
  );
};

export default Link;
