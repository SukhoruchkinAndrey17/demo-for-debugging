import { useState } from "react";
import { validate12 } from "../validators";

export default function Task1() {
  const [inputValue, setInputValue] = useState("");

  const onInput = (e) => {
    let newValue;

    try {
      newValue = validate12(e.target.value);
    } catch {
      console.error("Ошибка. Но не тут, это просто log. Где ошибка?");
      newValue = "";
    }

    setInputValue(newValue);
  };

  return (
    <div className="TaskContent">
      <h1>Введите "Привет" в поле ввода.</h1>
      <h1>Почему слово не получилось ввести?</h1>
      <input onInput={onInput} value={inputValue} />
    </div>
  );
}
