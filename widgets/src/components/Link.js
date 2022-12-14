import React from "react";

export default function Link({ className, href, children }) {
  const onClick = (event) => {
    if (event.metakey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={(e) => onClick(e)} className={className} href={href}>
      {children}
    </a>
  );
}
