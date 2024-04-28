import React, { useState, useEffect } from "react";

const Page2 = () => {
  const [test, setTest] = useState(`hiiiid`);
  const [isLoading, setIsLoading] = useState(true);
  const [inputArr, setInputArr] = useState();
  const loadedInput = localStorage.getItem("userInput")
    ? localStorage.getItem("userInput")
    : []; // To get the items saved in the local storage
  const handleClick = (e) => {
    // console.log(e.currentTarget.textContent);
    // const unique = inputArr.filter(
    //   (items) => items !== e.currentTarget.textContent
    // );
    // setInputArr(unique);
    // const uniqueArray = inputArr.filter(
    //   (value, index) => inputArr.indexOf(value) === index
    // );
    // console.log(unique);
    // console.log(uniqueArray);
    // const uniqueElements = new Set();
    // console.log(uniqueElements);
    // inputArr.forEach((element) => {
    //   if (
    //     element == e.currentTarget.textContent &&
    //     uniqueElements.has(element)
    //   ) {
    //     console.log(e.currentTarget.textContent);
    //   }
    // });
    ///////
    let count = (inputArr, element) => {
      return inputArr.filter((ele) => ele === element).length;
    };
    let numberOfElement = count(inputArr, e.currentTarget.textContent);
    console.log(numberOfElement);
    if (numberOfElement > 1) {
      const unique = inputArr.filter(
        (items) => items !== e.currentTarget.textContent
      );
      // setInputArr(unique);

      //////new test
      let testArr = Array(numberOfElement).fill(e.currentTarget.textContent);
      console.log(testArr);
      // const duplicates = testArr.filter(
      //   (item, index) => testArr.indexOf(item) !== index
      // );
      // console.log(duplicates);
      // setInputArr(unique.concat(duplicates));
      /////////////////////////
      const uniqueElements = (arr) => [...new Set(arr)];
      setInputArr(unique.concat(uniqueElements(testArr)));
      // console.log(uniqueElements(testArr));
    }
  };
  useEffect(() => {
    const loadedInput = localStorage.getItem("userInput")
      ? localStorage.getItem("userInput")
      : []; // To get the items saved in the local storage
    let Arr = loadedInput.split(``);
    if (Arr) {
      setInputArr(Arr);
      setIsLoading(false);
      // localStorage.setItem(`userInput`, inputArr); //to store the input to the local storage
    }
  }, []);
  if (isLoading) {
    return <div className="loader"></div>;
  }
  return (
    <main className="min-h-screen w-screen grid place-items-center">
      <section className="w-full grid place-items-center">
        <div className="header-container p-2 flex flex-col justify-center items-center bg-Dark-nude rounded-md shadow-lg">
          <div className="original-string">
            <span className="font-bold text-2xl">Original String: </span>
            <span className="text-2xl uppercase">{loadedInput.toString()}</span>
          </div>
          {loadedInput.toString() !== inputArr.join("") && (
            <div className="adjusted-string">
              <span className="font-bold text-2xl">Adjusted String: </span>
              <span className="text-2xl uppercase">{inputArr.join("")}</span>
            </div>
          )}
        </div>
      </section>
      {/* {console.log(inputArr)} */}
      <section className="grid place-items-center grid-cols-2 lg:grid-cols-3 gap-4 ease-linear duration-300">
        {inputArr.map((item, index) => {
          return (
            <article
              key={index}
              onClick={handleClick}
              className="shadow-lg hover:shadow-2xl hover:bg-Dark-nude ease-linear duration-300 rounded-md hover:text-white cursor-pointer h-48 w-48 grid place-items-center"
            >
              <div className="uppercase font-bold text-3xl">{item}</div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Page2;
