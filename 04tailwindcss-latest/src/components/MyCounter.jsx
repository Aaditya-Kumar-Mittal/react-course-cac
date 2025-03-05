import { useState } from "react";

function MyCounter() {
  // useState hook to manage the count state
  const [count, setCount] = useState(0);

  /*
   * ❌ Incorrect Approach:
   * If we directly pass 'count' into setCount multiple times, React batches these updates
   * and considers only the final value. Since all setCount calls use the same 'count' value,
   * React treats them as redundant and applies only one update.
   *
   * Example:
   * setCount(count + 1);
   * setCount(count + 1);
   * setCount(count + 1);
   * setCount(count + 1);
   * setCount(count + 1);
   *
   * Expected Output: +5 (from 0 to 5)
   * Actual Output: +1 (from 0 to 1)
   */

  /*
   * ✅ Correct Approach:
   * By using the functional update form 'setCount(prevCount => prevCount + 1)',
   * we ensure that each update works on the most recent state value.
   * This allows React to correctly apply multiple updates in a batch.
   *
   * Here, every function call gets the previous state (`prevCount`), ensuring
   * that all five increments are applied correctly.
   *
   * Expected Output: +5 (from 0 to 5)
   * Actual Output: +5 (from 0 to 5)
   */
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  /*
   * Decrement function:
   * This decreases the counter by 1 when clicked.
   * Unlike increment, it does not use the functional update approach.
   * However, if multiple decrement calls were needed in one function,
   * we should also use the prevCount pattern.
   */
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center gap-5 bg-slate-900 text-white rounded-xl p-4">
        {/* Displays the counter value */}
        <h1 className="text-4xl font-bold mb-4">Counter : {count}</h1>

        {/* Increment Button */}
        <button
          onClick={increment} // No need for () => increment() since it takes no arguments
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Increment
        </button>

        {/* Decrement Button */}
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default MyCounter;
