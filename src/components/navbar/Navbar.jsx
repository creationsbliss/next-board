"use client";

import {
  BellIcon,
  EarthIcon,
  MessageSquareTextIcon,
  SearchIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between bg-sidebar-accent p-4">
      <div className="font-medium text-muted-foreground capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-sm bg-sidebar-border px-2 py-1">
          <SearchIcon size={14} />
          <input
            className="text-muted-foreground focus:border-0 focus:bg-transparent focus:outline-none focus:ring-0"
            placeholder="Search..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-4">
          <MessageSquareTextIcon size={20} />
          <BellIcon size={20} />
          <EarthIcon size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
