import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  //whether dark mode is enabled or not
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [theme, setTheme] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled!!", "success");
      // document.title = "TextUtils - LightMode ";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(" Dark mode has been enabled!!", "success");
      // document.title = "TextUtils - DarkMode ";
    }
  };

  const changeTheme = (theme) => {
    setTheme({ theme: theme });
  };

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        theme={theme}
        changeTheme={changeTheme}
      />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About mode={mode} />} /> */}
        {/* <Route
              exact
              path="/"
              element={ */}
        <Textform
          heading="Try Textutils - Word counter, Character counter, Lowercase to Uppercase converter, Uppercase to Lowercase converter, Extra spaces Remover"
          mode={mode}
          showAlert={showAlert}
        />
        {/* } */}
        {/* /> */}
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
