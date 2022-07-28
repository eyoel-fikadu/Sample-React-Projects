import React, { useState } from "react";

const Accordian = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTtitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItem = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTtitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div>
      <div className="ui styled accordion">{renderedItem}</div>
    </div>
  );
};

export default Accordian;
