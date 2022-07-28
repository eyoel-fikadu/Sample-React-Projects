import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const [domReady, setDomReady] = useState(false);
  useEffect(() => {
    setDomReady(true);
  }, []);
  return domReady
    ? ReactDOM.createPortal(
        <div
          className="ui dimmer modals visible active"
          onClick={props.onDismiss}
        >
          <div
            className="ui standard modal visible active"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="header">{props.title}</div>
            <div className="content">{props.content}</div>
            <div className="actions">{props.actions}</div>
          </div>
        </div>,
        document.querySelector("#modal")
      )
    : null;
};

export default Modal;
