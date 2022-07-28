import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

import SearchBar from "./SearchBar";
import UserList from "./UserList";

class App extends React.Component {
  state = { images: [] };
  onSeachSubmit = async (term) => {
    const response = await unsplash.get(`/search/photos`, {
      params: { query: term },
    });
    //   .then((response) => {
    //     console.log(response.data.results);
    //   });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSeachSubmit} />
        <ImageList images={this.state.images} />
        <UserList />
      </div>
    );
  }
}

export default App;
