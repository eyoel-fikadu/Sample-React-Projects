import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColourContext from "../contexts/ColourContext";

class Button extends React.Component {
  render() {
    //const text = this.context === "english" ? "Submit" : "Voorlegg";
    return (
      <ColourContext.Consumer>
        {(colour) => (
          <button className={`ui button ${colour}`}>
            <LanguageContext.Consumer>
              {(value) => (value === "english" ? "Submit" : "Voorlegg")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColourContext.Consumer>
    );
  }
}

export default Button;
