import { useState } from "react";
import { validate33 } from "../validators";

export default function Task4() {
  const [inputValue, setInputValue] = useState("");

  const onInput = async (e) => {
    setInputValue(await validate33(e.target.value));
  };

  return (
    <div className="TaskContent">
      <h1>Почему тормозит ввод текста?</h1>
      <input onInput={onInput} value={inputValue} />
    </div>
  );
}
