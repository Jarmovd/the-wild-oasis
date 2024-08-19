import { useEffect, useRef } from "react";

export function useClickOutside(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handler, listenCapturing]);

  return ref;
}
