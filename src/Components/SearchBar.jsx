import React from "react";
import TextField from "@mui/material/TextField";

const SearchBar = () => {
  return (
    <form>
      <TextField
        id="search-bar"
        className="text"
        label="Enter a name"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
    </form>
  );
};

export default SearchBar;
