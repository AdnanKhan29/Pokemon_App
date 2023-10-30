import React from "react";
import Topbar from "./components/Topbar";
import Bottombar from "./components/Bottombar";
import "./App.css";
import PokeList from "./components/PokeList";
function App() {
  return (
    <>
      <Topbar></Topbar>
      <PokeList></PokeList>
      <Bottombar></Bottombar>
    </>
  );
}

export default App;
