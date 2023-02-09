import { useEffect, useRef } from "react";
import { useState } from "react";
import { chakra } from "@chakra-ui/react";

interface Props {
  emojis: string[];
  className?: string;
}

export function RainingEmojis({ emojis, className }: Props) {
  return (
    <chakra.div
      pos="absolute"
      top="0"
      left="0"
      h="100vh"
      w="100vw"
      overflow="hidden"
      className={`raining-emojis ${className}`}
    >
      {emojis.map((emoji, i) => (
        <Emoji key={i} emoji={emoji} />
      ))}
    </chakra.div>
  );
}

function Emoji({ emoji }: { emoji: string }) {
  const [x, setX] = useState(Math.random() * 100);
  const [y, setY] = useState(Math.random() * 100);

  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setY((y) => y + 1);
      ref.current!.style.transition = "all 0.1s ease-in-out";

      if (ref.current!.getBoundingClientRect().top > window.innerHeight) {
        setY(0);
        setX(Math.random() * 100);
        ref.current!.style.transition = "none";
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <chakra.span
      ref={ref}
      className="emoji"
      fontSize={[20, 30]}
      style={{
        position: "absolute",
        transition: "all 0.3s ease-in-out",
        zIndex: -1,
        top: `${y}%`,
        left: `${x}%`,
      }}
    >
      {emoji}
    </chakra.span>
  );
}
