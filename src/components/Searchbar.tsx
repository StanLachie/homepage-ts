import React, { FC, SyntheticEvent, useState } from "react";

interface SearchbarProps {
  darkMode: boolean;
}

const Searchbar: FC<SearchbarProps> = (props) => {
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
          className={`w-full p-4 rounded shadow-lg ${props.darkMode ? "bg-zinc-900 text-gray-100" : "bg-white text-gray-900"}`}
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
};

export default Searchbar;
