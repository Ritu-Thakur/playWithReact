import React, { useState, useEffect, useRef } from "react";

// How can we access the props without referencing props object?
const FuncComponent = ({ devs, name: initialName }) => {
  // How can we change our import to not have to reference React for these hooks?
  const [name, setName] = useState(initialName);
  const [updatedName, setUpdatedName] = useState();
  let timer = useRef();
  // What is the best way to ensure this is only ran once when component mounts?
  useEffect(() => {
    timer.current = setInterval(() => {
      if (updatedName === undefined) {
        setName(devs[Math.floor(Math.random() * devs.length)]);
      }
    }, 2000);
    return () => clearInterval(timer.current);
  }, []);

  // How can we clean up after this component unmounts?

  function handleNameUpdate(event) {
    setUpdatedName(event.target.value);
    clearInterval(timer.current);
  }

  return (
    /* How do we fix this without outputing any more elements? */
    <>
      <h1>Hello, {updatedName || name}</h1>
      <input onChange={handleNameUpdate} />
      <ul>
        {
          /* What prop is required here for react to track changes? */
          devs.map((element, index) => (
            <li key={`${element}-${index}`}>{element}</li>
          ))
        }
      </ul>
    </>
  );
};

export default FuncComponent;
