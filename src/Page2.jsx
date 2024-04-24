import React, { useState, useEffect } from "react";

const Page2 = () => {
  const [test, setTest] = useState(`hiiiid`);
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
      {/* {console.log(inputArr)} */}
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
    </main>
  );
};

export default Page2;
