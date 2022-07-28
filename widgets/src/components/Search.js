import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: { term },
        },
      });
      setResult(data.query.search);
    };
    // set timer to lag
    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);

    //called on each re rendered
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  const renderedResults = result.map((res) => {
    return (
      <div key={res.pageid} className="item">
        <div className="right floated content">
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href={`https://en.wikipedia.org?curid=${res.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{res.title}</div>
          <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
            type={"text"}
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}
