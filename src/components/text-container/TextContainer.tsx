import React, { useEffect, useRef } from "react";

const TextContainer = () => {
  const outerDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const resize = () => {
      if (outerDiv.current) {
        const updateFontSize = () => {
          const newFontSize = (outerDiv.current?.clientHeight ?? 0) / 8 + "px";
          outerDiv.current?.style.setProperty("font-size", newFontSize);
        };
        requestAnimationFrame(updateFontSize);
      }
    };

    const debounce = (callback: () => void, delay: number) => {
      let timer: ReturnType<typeof setTimeout>;
      return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
          callback();
        }, delay);
      };
    };

    const debouncedResize = debounce(() => resize(), 500);

    window.addEventListener("resize", debouncedResize);

    // Initial resize to set font size
    resize();

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return (
    <div
      ref={outerDiv}
      className="leading-tight h-screen transition-all duration-700 ease-in-out font-display uppercase flex flex-wrap content-start"
    >
      <h1 className="text-[2em] font-bold leading-none">Lukáš Peťko</h1>
      <h2 className="text-[.75em] font-thin">Frontend Developer</h2>
      <p className="text-[1.25em] font-regular flex flex-wrap gap-x-10">
        <span className="first-letter:font-bold">About me</span>
        <span className="first-letter:font-bold">Projects</span>
        {/*<span className="first-letter:font-bold">Experience</span>*/}
        <span className="first-letter:font-bold">Blog</span>
        <span className="first-letter:font-bold">Contact</span>
      </p>
    </div>
  );
};

export default TextContainer;
