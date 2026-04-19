import Image from "next/image";

interface SearchBarProps {
  searchValue: string;
  onChange: (value: string) => void;
}

export function SearchBar({ searchValue, onChange }: SearchBarProps) {
  return (
    <div className="relative flex items-center cursor-pointer">
      <Image
        src="/images/header/search.svg"
        alt=""
        aria-hidden="true"
        width={10}
        height={10}
        className="absolute left-[0.8rem] top-[0.8rem] z-[2] w-[1.2rem] md:top-[1.25rem]"
      />

      <input
        type="search"
        name="searchValue"
        value={searchValue}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search"
        aria-label="Search destinations and activities"
        className="
          peer z-[1] w-12 cursor-pointer rounded-[0.7rem] border-none bg-transparent py-[0.6rem] pl-0 pr-0 outline-none
          transition-[width,padding,background-color] duration-300 ease-in-out
          placeholder:opacity-0 placeholder:transition-opacity placeholder:duration-300
          hover:w-44 hover:bg-[#99a3ad32] hover:pl-12 hover:pr-2 hover:outline hover:outline-1 hover:outline-gray-300
          focus:w-44 focus:bg-[#99a3ad32] focus:pl-12 focus:pr-2 focus:outline focus:outline-1 focus:outline-gray-300
          focus:placeholder:opacity-100
          not-placeholder-shown:w-44 not-placeholder-shown:bg-[#99a3ad32] not-placeholder-shown:pl-12 not-placeholder-shown:pr-2
          not-placeholder-shown:outline not-placeholder-shown:outline-1 not-placeholder-shown:outline-gray-300
        "
      />
    </div>
  );
}
