import React from "react";

const Search = () => {
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={inputValue}
        title="dummySearch"
      />
    </div>
  );
};

export default Search;
