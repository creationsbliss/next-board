"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MenuItem = ({ link: { name, path, icon } }) => {
  const pathname = usePathname();

  return (
    <Link
      className={cn(
        "mt-2 flex items-center gap-4 rounded-sm p-2 hover:bg-sidebar-border",
        pathname === path && "bg-sidebar-border font-medium"
      )}
      href={path}
    >
      <span className=""> {icon} </span>
      <span className="capitalize"> {name} </span>
    </Link>
  );
};

export default MenuItem;
