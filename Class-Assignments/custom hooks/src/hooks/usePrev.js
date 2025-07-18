import { useEffect } from "react";
import { useRef } from "react";

export const usePrev = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

// it returns first, effect gets called later;
