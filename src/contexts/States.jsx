import React from 'react';
import context from './context';

const States = () => {
    const state={
        "name":"Tanishq",
        "class":"5b"
    }
  return (
    <context.Provider value={state}>
        {props.children}
    </context.Provider>
  )
}

export default States
