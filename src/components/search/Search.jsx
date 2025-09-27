"use client";

import { SearchIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      e.target.value.length > 3 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    router.replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex items-center gap-2 rounded-sm bg-sidebar-border px-2 py-1">
      <SearchIcon size={14} />
      <input
        className="text-muted-foreground focus:border-0 focus:bg-transparent focus:outline-none focus:ring-0"
        onChange={handleSearch}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default Search;
