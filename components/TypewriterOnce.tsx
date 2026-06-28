"use client";

import { useState, useEffect } from "react";

const TYPE_MS = 48;

export default function TypewriterOnce({ text }: { text: string }) {
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (chars < text.length) {
      const t = setTimeout(() => setChars((c) => c + 1), TYPE_MS);
      return () => clearTimeout(t);
    }
  }, [chars, text]);

  const done = chars === text.length;

  return (
    <span>
      {text.slice(0, chars)}
      {!done && (
        <span style={{ animation: "blink 1s step-end infinite" }}>|</span>
      )}
    </span>
  );
}
