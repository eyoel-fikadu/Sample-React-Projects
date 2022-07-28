import React from "react";

const useState = React.useState;

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const onButtonClick = (count) => {
    setCounter(count);
  };
  return (
    <div>
      <button onClick={() => onButtonClick(counter + 1)}>Click Me</button>

      <h1>Current Count:{counter}</h1>
    </div>
  );
}
