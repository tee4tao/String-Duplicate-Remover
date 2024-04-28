import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Page1 = () => {
  const [userInput, setUserInput] = useState(``);
  const [stringValue, setStringValue] = useState(``);
  const [danger, setDanger] = useState(false);
  const navigateTo = useNavigate();
  const onInputChange = (e) => {
    const { value } = e.target;
    const re = /^[A-Za-z]+$/; // to make sure the input accepts only alphabet
    if (value === "" || re.test(value)) {
      setUserInput(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput != ``) {
      navigateTo("/page2");
      console.log(userInput);
      setDanger(false);
    } else {
      setDanger(true);
    }
  };
  useEffect(() => {
    if (userInput != ``) {
      localStorage.setItem(`userInput`, userInput); //to store the input to the local storage
    }
  }, [userInput]);
  return (
    <main className="h-screen grid place-items-center w-full">
      <section className="w-2/4 md:w-2/4 lg:w-1/3">
        <form
          action=""
          className="flex flex-col items-center hover:bg-Dark-nude rounded-lg shadow-lg ease-linear duration-300 hover:shadow-2xl p-4 w-full"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={userInput}
            // onChange={(e) => setUserInput(e.target.value)}
            onChange={onInputChange}
            placeholder="Input your string"
            className="border-2 border-black h-14 rounded-md p-2 text-xl ease-linear duration-300 w-full"
          />
          <button
            type="submit"
            className="border-2 w-2/4 bg-Dark-nude hover:text-Dark-nude hover:bg-white h-8 rounded-md p-2 text-xl flex items-center justify-center mt-4 ease-linear duration-300 text-white"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default Page1;
