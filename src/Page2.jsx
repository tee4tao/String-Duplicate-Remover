import React, { useState, useEffect } from "react";

const Page2 = () => {
  const [test, setTest] = useState(`hiiiid`);
  useEffect(() => {
    const loadedInput = localStorage.getItem("userInput")
      ? localStorage.getItem("userInput")
      : []; // To get the items saved in the local storage
    console.log(loadedInput);
  }, []);
  return (
    <main className="min-h-screen w-screen grid place-items-center">
      <section>{test}</section>
    </main>
  );
};

export default Page2;
