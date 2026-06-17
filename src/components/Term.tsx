"use client";

// Term.tsx — an inline technical term with a plain-language PT-BR explanation.
//
// The term shows a subtle dotted underline in the brand color. The definition
// appears on hover (mouse), focus (keyboard) and tap (touch). The tooltip is
// rendered in a portal with position:fixed so it is never clipped by an
// `overflow-hidden` or transformed ancestor (the page has several).

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Coords = { top: number; left: number; below: boolean };

export function Term({
  label,
  def,
  children,
}: {
  label: string;
  def: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<Coords | null>(null);
  const tipId = useId();

  const place = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const below = r.top < 96; // not enough room above → drop below
    setCoords({
      top: below ? r.bottom + 8 : r.top - 8,
      left: r.left + r.width / 2,
      below,
    });
  }, []);

  const show = useCallback(() => {
    place();
    setOpen(true);
  }, [place]);
  const hide = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => {
    if (open) setOpen(false);
    else show();
  }, [open, show]);

  // While open, close on Escape / scroll / resize / outside pointer. These are
  // subscriptions to external systems; setState only runs inside the callbacks.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    const onScroll = () => setOpen(false);
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <>
      <button
        ref={ref}
        type="button"
        aria-describedby={open ? tipId : undefined}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        onClick={(e) => { e.preventDefault(); toggle(); }}
        className="term-trigger"
      >
        {children}
      </button>

      {open && coords
        ? createPortal(
            <span
              id={tipId}
              role="tooltip"
              className="term-tip"
              style={{
                top: coords.top,
                left: coords.left,
                transform: coords.below ? "translate(-50%, 0)" : "translate(-50%, -100%)",
              }}
            >
              <span className="term-tip-label">{label}</span>
              <span className="term-tip-def">{def}</span>
            </span>,
            document.body,
          )
        : null}
    </>
  );
}
