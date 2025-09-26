import { SearchIcon } from "lucide-react";

const Search = ({ placeholder }) => (
  <div className="flex items-center gap-2 rounded-sm bg-sidebar-border px-2 py-1">
    <SearchIcon size={14} />
    <input
      className="text-muted-foreground focus:border-0 focus:bg-transparent focus:outline-none focus:ring-0"
      placeholder={placeholder}
      type="text"
    />
  </div>
);

export default Search;
