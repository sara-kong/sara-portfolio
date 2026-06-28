"use client";

import { useState, useEffect } from "react";

const PHRASES = [
  "engineer <> creative",
  "ieor @ nyu",
  "building products & tinkering hobbyist",
];

const TYPE_MS = 70;
const DELETE_MS = 40;
const PAUSE_MS = 2400;

export default function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[idx];

    if (paused) {
      const t = setTimeout(() => {
        setPaused(false);
        setDeleting(true);
      }, PAUSE_MS);
      return () => clearTimeout(t);
    }

    if (deleting) {
      if (chars > 0) {
        const t = setTimeout(() => setChars((c) => c - 1), DELETE_MS);
        return () => clearTimeout(t);
      }
      setDeleting(false);
      setIdx((i) => (i + 1) % PHRASES.length);
      return;
    }

    if (chars < phrase.length) {
      const t = setTimeout(() => setChars((c) => c + 1), TYPE_MS);
      return () => clearTimeout(t);
    }

    setPaused(true);
  }, [chars, deleting, idx, paused]);

  return (
    <span>
      {PHRASES[idx].slice(0, chars)}
      <span style={{ animation: "blink 1s step-end infinite" }}>|</span>
    </span>
  );
}
