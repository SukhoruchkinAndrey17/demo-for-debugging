let needCheckHello = true;

export function validate(text) {
  const hasError = needCheckHello && text.toLowerCase() === "привет";

  if (hasError) {
    throw new Error(
      "Ты нашел ошибку, сделай так чтобы она не падала и можно было ввести слово 'Привет' в поле ввода",
    );
  }

  return text;
}
