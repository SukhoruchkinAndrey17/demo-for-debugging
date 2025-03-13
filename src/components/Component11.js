import { memo } from "react";

export const Component11 = memo(function Component11({ children } = {}) {
  for (let i = 0; i < 5_000; i++) {
    for (let j = 0; j < 1_000_000; j++) {
      let m = i * j;
    }
  }

  return children ? children : <div></div>;
});
