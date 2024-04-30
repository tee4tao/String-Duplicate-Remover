import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Page3 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [inputArr, setInputArr] = useState();
  useEffect(() => {
    const loadedInput = localStorage.getItem("userInput")
      ? localStorage.getItem("userInput")
      : []; // To get the items saved in the local storage
    let Arr = loadedInput.split(``);
    if (Arr) {
      setInputArr(Arr);
      setIsLoading(false);
    }
  }, []);
  if (isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <main className="min-h-screen w-screen grid place-items-center">
      <div className="font-bold text-2xl">All inputted strings</div>
      <section className="grid place-items-center grid-cols-2 lg:grid-cols-3 gap-4 ease-linear duration-300">
        {inputArr.map((item, index) => {
          return (
            <article
              key={index}
              className="shadow-lg hover:shadow-2xl hover:bg-Dark-nude ease-linear duration-300 rounded-md hover:text-white cursor-pointer h-48 w-48 grid place-items-center"
            >
              <div className="uppercase font-bold text-3xl">{item}</div>
            </article>
          );
        })}
      </section>
      <Link
        to={"/page1"}
        className="border-2 w-2/4 bg-Dark-nude hover:text-Dark-nude hover:bg-white h-8 rounded-md p-2 text-xl flex items-center justify-center mt-4 ease-linear duration-300 text-white"
      >
        Back to Page 1
      </Link>
    </main>
  );
};

export default Page3;
