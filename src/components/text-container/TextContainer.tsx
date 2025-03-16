import { useEffect, useRef, useState, type ReactNode } from "react";
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
  const [isMaxWidth, setIsMaxWidth] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  useFontResize(outerDiv);
  const age = Math.floor((Date.now() - +new Date("2000-03-25")) / 31556926000);

  useEffect(() => {
    const setIsHoveringButtonEvent = () => {
      setIsHoveringButton(true);
    };

    outerDiv.current?.children[0].addEventListener("mouseover", () => {
      setDisplayText(
        <>
          Hi! I'm Luke. Nice to meet you! 👋
          <br />
          <br />
          I'm a frontend developer based in Bratislava, Slovakia. I'm {age}{" "}
          years old. I've always loved new technologies and discovering new ways
          to create things! Hope you enjoy my portfolio! 😊
        </>,
      );
      setIsMaxWidth(true);
    });

    outerDiv.current?.children[1].addEventListener("mouseover", () => {
      setDisplayText(
        <>
          I've been learing web development since I was 10 years old and I've
          been working as a professional developer since 2019. I've worked in
          multiple companies in both startup and corporate environments. I've
          always been passionate about web development and I always wanted to
          learn as much as I can to keep up with the latest trends. 😊
          <br />
          <br />
          I'm currently working as a frontend developer at a startup called
          Akular as a frontend developer. And I use Vim, btw (had to mention)
        </>,
      );
      setIsMaxWidth(true);
    });

    outerDiv.current?.children[2].addEventListener(
      "mouseover",
      setIsHoveringButtonEvent,
    );
    outerDiv.current?.children[3].addEventListener(
      "mouseover",
      setIsHoveringButtonEvent,
    );
    outerDiv.current?.children[4].addEventListener(
      "mouseover",
      setIsHoveringButtonEvent,
    );
    outerDiv.current?.children[5].addEventListener(
      "mouseover",
      setIsHoveringButtonEvent,
    );

    github.current?.addEventListener("mouseover", () => {
      setDisplayText("Check out my GitHub!");
      setIsMaxWidth(false);
    });

    twitter.current?.addEventListener("mouseover", () => {
      setDisplayText("Follow me on 𝕏!");
      setIsMaxWidth(false);
    });

    linkedin.current?.addEventListener("mouseover", () => {
      setDisplayText("Connect with me on LinkedIn!");
      setIsMaxWidth(false);
    });

    outerDiv.current?.addEventListener("mouseout", () => {
      setDisplayText(null);
      setIsMaxWidth(false);
      setIsHoveringButton(false);
    });
  }, []);

  return (
    <>
      <Cursor
        displayText={displayText}
        isMaxWidth={isMaxWidth}
        isHoveringButton={isHoveringButton}
      />
      <div
        ref={outerDiv}
        className="flex h-screen flex-wrap content-start items-center gap-x-10 font-display font-thin uppercase leading-tight transition-all duration-700 ease-in-out"
      >
        <h1 className="block font-bold leading-none">Lukáš Peťko</h1>
        <h2 className="font-thin">Frontend Developer</h2>
        <Link href="/about-me">About me</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="mailto:luke.petko@gmail.com">Email me</Link>
        <a href="https://github.com/LukePetko" ref={github}>
          <img src="/github.svg" className="h-[0.6em]" />
        </a>
        <a href="https://twitter.com/LUkEPetko" ref={twitter}>
          <img src="/x.svg" className="h-[0.6em]" />
        </a>
        <a href="https://linkedin.com/in/lukas-petko" ref={linkedin}>
          <img src="/linkedin.svg" className="h-[0.6em]" />
        </a>
      </div>
    </>
  );
};

export default TextContainer;
