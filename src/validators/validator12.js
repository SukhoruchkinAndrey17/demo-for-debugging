export function validate(text) {
  if (text.toLowerCase() === "привет") {
    throw new Error(
      "Ты нашел ошибку, сделай так чтобы она не падала и можно было ввести слово 'Привет' в поле ввода",
    );
  }

  return text;
}
