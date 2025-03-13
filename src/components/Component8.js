export function Component8({ children } = {}) {
  for (let i = 0; i < 1_000_000; i++) {
    let m = i * i - 1;
  }

  return children ? children : <div></div>;
}
