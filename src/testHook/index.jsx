import React, { useState, useEffect, useLayoutEffect } from "react";
import TestUseRef from './Ref'

const EffectDemo = () => {
  const [count, setCount] = useState(0);
  useEffect(
    function useEffectDemo() {
      console.log("useEffect:函数体", count);
      return () => {
        console.log("useEffect:卸载阶段", count);
      };
    },
    [count]
  );
  useLayoutEffect(
    function useLayoutEffectDemo() {
      console.log("useLayoutEffect:layout", count);
      setCount(count+1)
      alert("layout");
      return () => {
        console.log("useLayoutEffect  unMount", count);
        alert("layout unMount");
      };
    },
    []
  );
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {console.log("func render")}
        click me
      </button>
      <span>{count}</span>
    </>
  );
};



const TestHook = () => {
  return (
    <>
      <TestUseRef />
    </>
  );
};
export default TestHook;
