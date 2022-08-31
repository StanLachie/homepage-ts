import React, { SyntheticEvent, useState } from "react";

function Searchbar() {
  const [currentSearchQuery, setCurrentSearchQuery] = useState("");

  const handleSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    if (currentSearchQuery.startsWith("www.")) {
      window.open(`https://${currentSearchQuery}`);
    } else {
      window.open(`https://www.google.com/search?q=${currentSearchQuery}`);
    }
    setCurrentSearchQuery("");
  };

  return (
    <div className="flex justify-center items-center ">
      <form className="w-3/4" onSubmit={handleSearch}>
        <input
          className="w-full p-4 rounded shadow-lg"
          value={currentSearchQuery}
          placeholder="Search with Google..."
          title="Search with Google"
          onChange={(e) => {
            e.preventDefault();
            setCurrentSearchQuery(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
}

export default Searchbar;
