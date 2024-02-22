import React, { useEffect, useRef, useState, type ReactNode } from "react";
import useFontResize from "./hooks/useFontResize";
import Cursor from "./Cursor";
import Link from "./Link";

const TextContainer = () => {
  const outerDiv = useRef<HTMLDivElement>(null);
  const github = useRef<HTMLAnchorElement>(null);
  const twitter = useRef<HTMLAnchorElement>(null);
  const linkedin = useRef<HTMLAnchorElement>(null);
  const [displayText, setDisplayText] = useState<string | ReactNode | null>(
    null,
  );
  useFontResize(outerDiv);

  useEffect(() => {
    outerDiv.current?.children[0].addEventListener("mouseover", () => {
      setDisplayText(
        <>
          Hi! I'm Luke. Nice to meet you! 👋
          <br />
          <br />
          I'm a frontend developer based in Bratislava, Slovakia. I'm 23 years
          old. I've always loved new technologies and discovering new ways to
          create things! Hope you enjoy my portfolio! 😊
        </>,
      );
    });

    outerDiv.current?.children[1].addEventListener("mouseover", () => {
      setDisplayText(
        <>
          I've been learing web development since I was 10 years old and I've
          been working as a professional developer since 2018. I've worked in
          multiple companies in both startup and corporate environments. I've
          always been passionate about web development and I always wanted to
          learn as much as I can to keep up with the latest trends. 😊
          <br />
          <br />
          I'm currently working as a frontend developer at a startup called
          Akular as a frontend developer. And I use Vim, btw (had to mention)
        </>,
      );
    });

    github.current?.addEventListener("mouseover", () => {
      setDisplayText("Check out my GitHub!");
    });

    twitter.current?.addEventListener("mouseover", () => {
      setDisplayText("Follow me on 𝕏!");
    });

    linkedin.current?.addEventListener("mouseover", () => {
      setDisplayText("Connect with me on LinkedIn!");
    });

    outerDiv.current?.addEventListener("mouseout", () => {
      setDisplayText(null);
    });
  }, []);

  return (
    <>
      <Cursor displayText={displayText} />
      <div
        ref={outerDiv}
        className="leading-tight h-screen transition-all duration-700 ease-in-out font-display uppercase flex flex-wrap content-start items-center gap-x-10 font-thin"
      >
        <h1 className="text-[1.3em] font-bold leading-none block">
          Lukáš Peťko
        </h1>
        <h2 className="text-[1.3em] font-thin">Frontend Developer</h2>
        <Link>About me</Link>
        <Link>Projects</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
        <a href="https://github.com/LukePetko" ref={github}>
          <img src="/github.svg" className="h-[0.8em]" />
        </a>
        <a href="https://twitter.com/LUkEPetko" ref={twitter}>
          <img src="/x.svg" className="h-[0.8em]" />
        </a>
        <a href="https://linkedin.com/in/lukas-petko" ref={linkedin}>
          <img src="/linkedin.svg" className="h-[0.8em]" />
        </a>
      </div>
    </>
  );
};

export default TextContainer;
