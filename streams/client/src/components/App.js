import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

export default function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" exact element={<StreamList />} />
          <Route path="/streams/new" exact element={<StreamCreate />} />
          <Route path="/streams/edit/:id" exact element={<StreamEdit />} />
          <Route path="/streams/delete/:id" exact element={<StreamDelete />} />
          <Route path="/streams/:id" exact element={<StreamShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
