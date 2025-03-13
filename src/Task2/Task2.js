import { useState } from "react";
import {
  Component1,
  Component2,
  Component3,
  Component5,
  Component6,
  Component7,
  Component8,
  Component9,
  Component10,
  Component11,
} from "../components";

export default function Task2() {
  const [inputValue, setInputValue] = useState("");

  const onInput = async (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="TaskContent">
      <h1>1. Почему страница долго строилась?</h1>
      <h1>2. Почему тормозит ввод текста?</h1>
      <input onInput={onInput} value={inputValue} />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
      <Component9 />
      <Component10 />
      <Component11 />
    </div>
  );
}
