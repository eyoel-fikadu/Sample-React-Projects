import React, { useState } from "react";
import Accordian from "./Accordian";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Header from "./Header";
import Route from "./Route";

const items = [
  {
    title: "What is react?",
    content: "React is a fron end java script framework",
  },
  {
    title: "What is react? Q1",
    content: "React is a favorite Js library among engineers",
  },
  {
    title: "What is react Question 2?",
    content: "You use react by creating componen",
  },
];

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "A Shade of blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setselected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          selected={selected}
          onSelectedChange={setselected}
          options={options}
        />
      </Route>
    </div>
  );
};

export default App;
