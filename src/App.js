import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Menu from "./Menu";
import MenuItems from "./MenuItems";

const App = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (cat) => {
    const filteredItems = Menu.filter((curElem) => {
      return curElem.category === cat;
    });
    setItems(filteredItems);
  };
  return (
    <>
      <h1 className="mt-5 text-center text-capitalize main-heading">
        order your favourite dish
      </h1>
      <hr />
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
          <button
            className="btn btn-warning text-capitalize"
            onClick={() => filterItem("breakfast")}
          >
            breakfast
          </button>
          <button
            className="btn btn-warning text-capitalize"
            onClick={() => filterItem("lunch")}
          >
            lunch
          </button>
          <button
            className="btn btn-warning text-capitalize"
            onClick={() => filterItem("snacks")}
          >
            snacks
          </button>
          <button
            className="btn btn-warning text-capitalize"
            onClick={() => filterItem("dinner")}
          >
            dinner
          </button>
          <button
            className="btn btn-warning text-capitalize"
            onClick={() => setItems(Menu)}
          >
            all
          </button>
        </div>
      </div>
      <MenuItems items={items} />
    </>
  );
};

export default App;
