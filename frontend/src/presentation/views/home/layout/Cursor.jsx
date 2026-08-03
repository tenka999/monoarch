import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Cursor({ cursorOpen }) {
  // const [open, setOpen] = useState(false);
  const cursorRef = useRef(null);

  // const projectImg = querySelectorAll(".project-img");

  window.addEventListener("hover", () => {
    setOpen(!open);
  });

  useEffect(() => {
    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };

    const move = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const update = () => {
      pos.x += (mouse.x - pos.x) * 0.2;
      pos.y += (mouse.y - pos.y) * 0.2;

      gsap.set(cursorRef.current, {
        x: pos.x,
        y: pos.y,
      });
    };

    gsap.ticker.add(update);

    return () => {
      window.removeEventListener("mousemove", move);
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <div ref={cursorRef} className={`cursor ${cursorOpen ? "drag" : ""}`}>
      {cursorOpen ? "<  drag  >" : ""}
    </div>
  );
}
