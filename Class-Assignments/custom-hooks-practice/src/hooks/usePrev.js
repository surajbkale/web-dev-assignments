import { useEffect } from "react";
import { useRef } from "react";

function usePrev(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function usePrevAlternate(value, initial) {
  const ref = useRef({ target: value, previous: initial });

  if (ref.current.target != value) {
    ref.current.previous = ref.current.target;
    ref.current.target = value;
  }
  return ref.current.previous;
}

export { usePrev, usePrevAlternate };
