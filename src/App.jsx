import { useEffect, useState } from "react";

/**
 * Задача: Починить и оптимизировать форматирование
 *
 * Вводимое значение должно переводиться в верхний регистр и не затирать прошлый ввод
 * Также после скрытия инпута введеное значение не должно изменяться "в фоне"
 */

// const asyncFormat = (str) =>
//   new Promise((resolve) => setTimeout(() => resolve(str.toUpperCase()), 1000));

export default function App() {
  const [show, setShow] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    // если инпут скрыт - не создаем таймер
    if (!show) {
      return;
    }

    const handler = setTimeout(() => {
      setValue(value.toUpperCase());
    }, 1000);

    return () => {
      // отчистка таймера при изменении зависимостей
      clearTimeout(handler);
    };
  }, [value, show]);

  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show</button>
      <button onClick={() => setShow(false)}>Hide</button>

      {show && (
        <div>
          <input onChange={(e) => setValue(e.target.value)} value={value} />
        </div>
      )}
    </div>
  );
}
