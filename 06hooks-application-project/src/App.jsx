import React, { useCallback, useEffect, useRef, useState } from "react";

function App() {
  // Setting variables for state binding
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  const passwordGenerator = useCallback(() => {
    let samplePassword = "";
    let sampleString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //Eventually, data will be stored in this string for generating the password from it.

    if (numberAllowed) sampleString += "0123456789";
    if (charAllowed) sampleString += "!@#$%&*/+.-_=)(^[]{}|;:,?*";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * sampleString.length + 1);
      samplePassword += sampleString.charAt(char);
    }
    setPassword(samplePassword);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // useEffect is a React Hook that lets you perform side effects in your components.
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 20);

    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div>
      <h1 className="text-6xl font-bold text-slate-900 text-center m-5">
        Password Generator
      </h1>

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 bg-slate-900 my-10">
        <div className="flex flex-col items-center justify-center shadow rounded-lg overflow-hidden mb-4">
          <div>
            <input
              type="text"
              value={password}
              className=" bg-amber-200 w-full py-4 px-3 outline-none text-slate-900 text-bold text-2xl text-center"
              placeholder="Your random password"
              readOnly
              ref={passwordRef}
            />
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-b-lg"
              onClick={copyPasswordToClipboard}
            >
              Copy Password
            </button>
          </div>
          <div className="flex flex-col items-center text-xl gap-x-2 mt-4">
            <div className="flex items-center gap-x-3">
              <input
                type="range"
                name="passwordLength"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer accent-red-500"
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="passwordLength" className="text-white text-bold">
                Password Length : {length}
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                name="numbers"
                id="numbers"
                defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numbers" className="text-white text-bold">
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                name="characters"
                id="characters"
                defaultChecked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="characters" className="text-white text-bold">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
