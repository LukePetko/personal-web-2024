import React, { useEffect, useRef, type ReactNode } from "react";

type CursorProps = {
  displayText: string | ReactNode | null;
};

const Cursor = ({ displayText }: CursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
    hasDisplayText: false,
  });

  useEffect(() => {
    if (displayText) {
      positionRef.current.hasDisplayText = true;
    } else {
      positionRef.current.hasDisplayText = false;
    }
  }, [displayText]);

  const updatePosition = (e: MouseEvent) => {
    if (!cursorRef.current) return;
    const { clientX, clientY } = e;

    const offsetX = positionRef.current.hasDisplayText ? -8 : 32;
    const offsetY = positionRef.current.hasDisplayText ? -8 : 32;

    positionRef.current.mouseX = clientX - offsetX;
    positionRef.current.mouseY = clientY - offsetY;
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition);
    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      positionRef.current.distanceX =
        positionRef.current.mouseX - positionRef.current.destinationX;
      positionRef.current.distanceY =
        positionRef.current.mouseY - positionRef.current.destinationY;
      positionRef.current.destinationX += positionRef.current.distanceX / 12;
      positionRef.current.destinationY += positionRef.current.distanceY / 12;

      if (cursorRef.current) {
        cursorRef.current.style.left = positionRef.current.destinationX + "px";
        cursorRef.current.style.top = positionRef.current.destinationY + "px";
      }
    };
    followMouse();
    return () => {
      cancelAnimationFrame(positionRef.current.key);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed bg-white transition-transform duration-300 pointer-events-none ${
        displayText
          ? "rounded-md w-1/2"
          : "w-16 h-16 rounded-full mix-blend-difference"
      }`}
    >
      <p className="text-2xl text-black py-2 px-4 font-display">
        {displayText}
      </p>
    </div>
  );
};

export default Cursor;
