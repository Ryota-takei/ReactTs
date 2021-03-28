import React, { useState } from "react";

export const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={() => {setValue(value + 1)}}>+1</button>
      <button onClick={() => {setValue(value - 1)}}>-1</button>
    </div>
  );
};
