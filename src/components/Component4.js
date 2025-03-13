import { useLayoutEffect } from "react";

function slowFunction() {
  for (let i = 0; i < 5_000; i++) {
    for (let j = 0; j < 1_000_000; j++) {
      let m = i * j;
    }
  }
}

export function Component4({ children } = {}) {
  for (let i = 0; i < 1_000_000; i++) {
    let m = i * i - 1;
  }

  useLayoutEffect(() => {
    slowFunction();
  });

  return children ? children : <div></div>;
}
