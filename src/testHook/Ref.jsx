import React, { useState, useEffect, useLayoutEffect, useRef, useImperativeHandle } from "react";

const Son = React.forwardRef((props, refs) => {
  const sonRef = useRef()

  useImperativeHandle(refs, () => ({
    change: () => {
      sonRef.current.innerText = sonRef.current.innerText + '1'
    }
  }))
  
  return (
    <>
      <div ref={sonRef}>儿子组件</div>
    </>
  );
});

const TestUseRef = () => {
  const dom = useRef();

  return (
    <>
      <Son ref={dom} />
      <button
        onClick={() => {
          console.log('refs', dom.current)
          dom.current.change()
        }}
      >
        click
      </button>
    </>
  );
};
export default TestUseRef;
