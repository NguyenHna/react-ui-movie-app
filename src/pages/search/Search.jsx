import React from "react";
import NavBar from "../Component/NavBar/index";
import ResultList from "../Component/ResultList";
import SearchForm from "../Component/SearchForm";

const Search = () => {
  return (
    <div className="app container-search">
      <NavBar />
      <SearchForm />
    </div>
  );
};

export default Search;
