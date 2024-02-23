import React, { type ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  href?: string;
};

const Link = ({ children, href }: LinkProps) => {
  return (
    <a
      href={href}
      className="animate-gradient bg-gradient-to-r from-violet-700 via-cyan-400 to-blue-500 bg-300% bg-clip-text transition-colors duration-300 first-letter:font-bold hover:text-transparent"
    >
      {children}
    </a>
  );
};

export default Link;
