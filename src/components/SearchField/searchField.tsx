import { useEffect, useState } from "react";
import "./searchField.scss";

const SearchField = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch("");
  }, []);

  return (
    <div className="search-bar">
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        value={search}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchField;
