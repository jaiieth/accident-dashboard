import { useState } from "react";

const State6 = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState();
  const calculate = (e) => {
    e.preventDefault();
    setSum(Number(number1) + Number(number2));
  };
  return (
    <div className="flex flex-col w-fit m-2 p-2 bg-gray-300 rounded-lg items-center">
      <form>
        <input
          type="number"
          placeholder="Number1"
          className="bg-gray-200 rounded-lg m-2 w-24 px-2"
          id="number1"
          onChange={(e) => {
            setSum(e.target.value);
            setNumber1(e.target.value);
          }}
        />
        +
        <input
          type="number"
          placeholder="Number2"
          className="bg-gray-200 rounded-lg m-2 w-24 px-2"
          id="number2"
          onChange={(e) => setNumber2(e.target.value)}
        />
        <div className="flex w-full justify-evenly">
          <button
            className="px-4 mx-2 bg-gray-400 rounded-lg"
            onClick={calculate}
          >
            Calculate
          </button>
          <p className="mx-2 bg-gray-100 rounded-lg w-fit px-4 text-red-500">
            {sum}
          </p>
        </div>
      </form>
    </div>
  );
};

export default State6;
