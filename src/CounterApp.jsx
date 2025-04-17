import { useCallback, useState } from "react";
import Button from "./Button";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  // flag = 1 means optimized functionadd
  // flag = 0 means normal function
  const flag = 1;

  const handleIncrement = () => {
    console.log("I am inside Increment function");
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  const optimizedHandleIncrement = useCallback(() => {
    console.log(`Increment button clicked. Current count: ${count}`);
    setCount((prev) => prev + 1);
  }, []);

  const optimizedHandleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="w-64 bg-white shadow-lg rounded-xl p-6 transform transition-all hover:scale-105 duration-300">
        {/* Title of this sample app */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Counter App
        </h1>

        {/* count of this sample app */}
        <div className="flex justify-center my-4">
          <span className="text-4xl font-bold text-blue-600">{count}</span>
        </div>

        {/* Increment and Decrement buttons */}
        <div className="flex flex-col gap-3 mt-4">
          <Button
            onClickEvent={
              flag === 1 ? optimizedHandleIncrement : handleIncrement
            }
            children="Increment"
          />

          <Button
            onClickEvent={
              flag === 1 ? optimizedHandleDecrement : handleDecrement
            }
            children="Decrement"
          />
        </div>
      </div>
    </div>
  );
}
