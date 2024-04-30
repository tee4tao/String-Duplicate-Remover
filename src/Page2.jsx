import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [inputArr, setInputArr] = useState();
  const loadedInput = localStorage.getItem("userInput")
    ? localStorage.getItem("userInput")
    : []; // To get the items saved in the local storage
  const handleClick = (idx) => {
    const uniqueArray = inputArr.filter((item, index, self) => {
      if (idx === index) {
        return true;
      }
      return item !== self[idx] || index === idx;
    });
    setInputArr(uniqueArray);
  };
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
  const duplicates = inputArr.filter(
    (item, index) => inputArr.indexOf(item) !== index
  );
  if (duplicates.length === 0) {
    alert(`all duplicate removed`);
  }
  return (
    <main className="min-h-screen w-screen grid place-items-center">
      <section className="w-full grid place-items-center">
        <div className="header-container p-2 flex flex-col justify-center items-center bg-Dark-nude rounded-md shadow-lg">
          <div className="original-string">
            <span className="font-bold text-2xl">Original String: </span>
            <span className="text-2xl uppercase">{loadedInput.toString()}</span>
          </div>
          {/* {loadedInput.toString() !== inputArr.join("") && ( */}
          <div className="adjusted-string">
            <span className="font-bold text-2xl">Adjusted String: </span>
            <span className="text-2xl uppercase">{inputArr.join("")}</span>
          </div>
          {/* )} */}
        </div>
      </section>
      {/* {console.log(inputArr)} */}
      <section className="grid place-items-center grid-cols-2 lg:grid-cols-3 gap-4 ease-linear duration-300">
        {inputArr.map((item, index) => {
          return (
            <article
              key={index}
              onClick={() => handleClick(index)}
              className="shadow-lg hover:shadow-2xl hover:bg-Dark-nude ease-linear duration-300 rounded-md hover:text-white cursor-pointer h-48 w-48 grid place-items-center"
            >
              <div className="uppercase font-bold text-3xl">{item}</div>
            </article>
          );
        })}
      </section>
      <div className="btn-container space-x-20 flex justify-center items-center">
        <Link
          to={"/page1"}
          className="border-2 bg-Dark-nude hover:text-Dark-nude hover:bg-white h-8 rounded-md p-2 w-auto text-xl flex items-center justify-center mt-4 ease-linear duration-300 text-white"
        >
          Previous Page
        </Link>
        <Link
          to={"/page3"}
          className="border-2 bg-Dark-nude hover:text-Dark-nude hover:bg-white h-8 rounded-md p-2 text-xl flex items-center justify-center mt-4 ease-linear duration-300 text-white"
        >
          Next Page
        </Link>
      </div>
    </main>
  );
};

export default Page2;
