import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1 data-testid="counter" id="counter">
        {counter}
      </h1>
      <div>
        <button
          data-testid="button-up"
          id="button-up"
          onClick={incrementCounter}
        >
          {" "}
          Up
        </button>
        <button
          data-testid="button-down"
          id="button-down"
          onClick={decrementCounter}
        >
          Down
        </button>
      </div>
    </>
  );
};

export default Counter;
