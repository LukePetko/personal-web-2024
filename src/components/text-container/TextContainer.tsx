import React, { useEffect, useRef, useState } from "react";
import useFontResize from "./hooks/useFontResize";
import Cursor from "./Cursor";

const TextContainer = () => {
  const outerDiv = useRef<HTMLDivElement>(null);
  const [displayText, setDisplayText] = useState("");
  useFontResize(outerDiv);

  useEffect(() => {
    outerDiv.current?.children[0].addEventListener("mouseover", () => {
      setDisplayText("Hi! I'm Luke. Nice to meet you! 👋");
    });

    outerDiv.current?.children[0].addEventListener("mouseout", () => {
      setDisplayText("");
    });
  }, []);

  return (
    <>
      <Cursor displayText={displayText} />
      <div
        ref={outerDiv}
        className="leading-tight h-screen transition-all duration-700 ease-in-out font-display uppercase flex flex-wrap content-start items-center gap-x-6"
      >
        <h1 className="text-[1.2em] font-bold leading-none block">
          Lukáš Peťko
        </h1>
        <h2 className="text-[1.2em] font-thin">Frontend Developer</h2>
        <a className="text-[1.2em] first-letter:font-bold">About me</a>
        <a className="text-[1.2em] first-letter:font-bold">Projects</a>
        {/*<a className="first-letter:font-bold">Experience</a>*/}
        <a className="text-[1.2em] first-letter:font-bold">Blog</a>
        <a className="text-[1.2em] first-letter:font-bold">Contact</a>
      </div>
    </>
  );
};

export default TextContainer;
