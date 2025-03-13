function multiply(a, b) {
  return a * b;
}

export function validate(text) {
  for (let i = 0; i < 5_000; i++) {
    for (let j = 0; j < 1_000_000; j++) {
      let m = multiply(i, j);
    }
  }

  return text;
}
