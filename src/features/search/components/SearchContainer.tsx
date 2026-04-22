"use client";

import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SearchSuggestions } from "./SearchSuggestions";

export function SearchContainer() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="relative flex items-center">
      <SearchBar searchValue={searchValue} onChange={setSearchValue} />
      {searchValue.trim() !== "" && (
        <SearchSuggestions searchValue={searchValue} />
      )}
    </div>
  );
}
