import { useState } from "react";
import Faq from "./Faq";

function Toggle() {
  const [number, setNumber] = useState(1);
  console.log(number);

  return (
    <div>
      <h1>Toggle</h1>
      <p>number is {number}</p>
      <button
        onClick={() => {
          console.log("clicked +");
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          console.log("clicked -");
          setNumber(number - 1);
        }}
      >
        -
      </button>

      <div>
        <Faq />
      </div>
    </div>
  );
}

export default Toggle;
