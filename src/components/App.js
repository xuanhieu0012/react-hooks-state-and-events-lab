import React, { useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [changeMode, setchangeMode] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = changeMode ? "App dark" : "App light"
  function handleMode(){
    setchangeMode(appClass => !appClass)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick= {handleMode}>{appClass}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
