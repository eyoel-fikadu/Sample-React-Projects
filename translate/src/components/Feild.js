import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Feild extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context === "english" ? "Name" : "Nam";
    return (
      <div className="ui feild">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Feild;
