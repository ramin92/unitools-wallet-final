import { useState } from "react";

export default function useLocalStorage(
  key,
  initialValue
) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);

    return saved
      ? JSON.parse(saved)
      : initialValue;
  });

  function save(data) {
    setValue(data);
    localStorage.setItem(
      key,
      JSON.stringify(data)
    );
  }

  return [value, save];
}