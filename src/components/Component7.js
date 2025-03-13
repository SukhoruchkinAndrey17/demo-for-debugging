import { useEffect, useRef } from "react";

export function Component7({ children } = {}) {
  const mountedRef = useRef();

  useEffect(() => {
    mountedRef.current = true;
  }, []);

  if (mountedRef.current) {
    for (let i = 0; i < 2_000; i++) {
      for (let j = 0; j < 1_000_000; j++) {
        let m = i * j;
      }
    }
  }

  return children ? children : <div></div>;
}
