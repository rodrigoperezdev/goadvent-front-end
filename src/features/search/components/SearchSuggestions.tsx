import { useSearchSuggestions } from "../hooks/useSearchSuggestions";

interface SearchSuggestionsProps {
  searchValue: string;
}

export function SearchSuggestions({ searchValue }: SearchSuggestionsProps) {
  const { getFilteredSuggestions, isLoading } = useSearchSuggestions();
  const filteredSuggestions = getFilteredSuggestions(searchValue);

  const highlightMatch = (name: string) => {
    if (!searchValue) return name;

    const lowerName = name.toLowerCase();
    const lowerSearchValue = searchValue.toLowerCase();
    const matchIndex = lowerName.indexOf(lowerSearchValue);

    if (matchIndex === -1) return name;

    return (
      <>
        {name.substring(0, matchIndex)}
        <strong>
          {name.substring(matchIndex, matchIndex + searchValue.length)}
        </strong>
        {name.substring(matchIndex + searchValue.length)}
      </>
    );
  };

  if (isLoading || !searchValue.trim() || filteredSuggestions.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-[53px] w-[14.4rem] rounded-2xl border border-gray-200 bg-white shadow-sm">
      <ul role="listbox" className="m-0 p-0">
        {filteredSuggestions.map((suggestion) => (
          <li
            key={suggestion}
            role="option"
            className="cursor-pointer p-4 capitalize transition-colors hover:bg-gray-100 first:rounded-t-2xl last:rounded-b-2xl"
          >
            {highlightMatch(suggestion)}
          </li>
        ))}
      </ul>
    </div>
  );
}
