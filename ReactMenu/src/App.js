import React from "react";
import ReactDOM from "react-dom";
import Logo from "./components/Logo";
import Mains from "./components/Mains";
import Extras from "./components/Extras";
import Total from "./components/Total";
import { Provider } from "./Context";
import { mains, sides, drinks } from "./data";
import "./styles.css";

// The App component itself
const App = () => {
  return (
    <Provider>
      <div className="menu">
        <Logo />
        <Mains meals={mains} />
        <aside className="aside">
          <Extras type="Sides" items={sides} />
          <Extras type="Drinks" items={drinks} />
        </aside>
        <Total />
      </div>
    </Provider>
  );
};

// Render the App component into the root element in index.html
ReactDOM.render(<App />, document.getElementById('root'));
