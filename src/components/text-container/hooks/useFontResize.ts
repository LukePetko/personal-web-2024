import { useEffect } from "react";

const useFontResize = (divRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const resize = () => {
      if (divRef.current) {
        const updateFontSize = () => {
          const newFontSize = (divRef.current?.clientHeight ?? 0) / 9 + "px";
          divRef.current?.style.setProperty("font-size", newFontSize);
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
};

export default useFontResize;
