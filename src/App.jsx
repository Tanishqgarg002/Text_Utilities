import { React, useContext, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import './App.css'
import Navbar from "./components/navbar.jsx";
import TextForm from "./components/textform";
import About from "./components/about";
import Alert from "./components/alert";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   Outlet,
//   Routes,
//   Router
// } from "react-router-dom";
// import context from "./contexts/context.jsx";//contexts not working; 


function App() {

  // const a=useContext(context);
  // console.log("hello");
  // const [count, setCount] = useState(0)
  const [mode, setmode] = useState("light");
  const toggelmode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#060545";
      showalert("Dark mode has been enabled!", "success");
      document.title = "TextUtils Dark Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled!", "success");
      document.title = "TextUtils Light Mode";
    }
  };
  // setInterval(()=>{
  //   document.title="Install TextUtils Now";
  // },1000)
  // setInterval(()=>{
  //   document.title="TextUtils is best";
  // },1100)
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      mesg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 500);
  };

  return (
    <>
    {/* <Router> */}

      <Navbar title="H&H" about="About" mode={mode} togmode={toggelmode} />
      <Alert alert={alert} />

      <div className="container col-9">
        <TextForm showalert={showalert} mode={mode}/>
         {/* <About/> */}
        {/* <Routes>
          <Route
            path="/"
            element={<TextForm showalert={showalert} mode={mode} />}
            />
          <Route path="/about" element={<About />} />
        </Routes> */}
      </div>
            {/* </Router> */}
    </>
  );
}

export default App;
