import {
  ArrowLeftRight,
  DollarSign,
  File,
  Group,
  Headset,
  LayoutDashboard,
  LogOutIcon,
  Settings as SettingsIcon,
  ShoppingBasket,
  Users,
} from "lucide-react";
import Image from "next/image";
import MenuItem from "../menu-item/MenuItem";

const menuLinks = [
  {
    title: "Pages",
    links: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: <LayoutDashboard size={18} />,
      },
      { name: "Users", path: "/dashboard/users", icon: <Users size={18} /> },
      {
        name: "Products",
        path: "/dashboard/products",
        icon: <ShoppingBasket size={18} />,
      },
      {
        name: "Transactions",
        path: "/dashboard/transactions",
        icon: <ArrowLeftRight size={18} />,
      },
    ],
  },
  {
    title: "Analytics",
    links: [
      {
        name: "Revenue",
        path: "/dashboard/revenue",
        icon: <DollarSign size={18} />,
      },
      { name: "Reports", path: "/dashboard/reports", icon: <File size={18} /> },
      { name: "Teams", path: "/dashboard/teams", icon: <Group size={18} /> },
    ],
  },
  {
    title: "User",
    links: [
      {
        name: "Settings",
        path: "/dashboard/settings",
        icon: <SettingsIcon size={18} />,
      },
      { name: "Help", path: "/dashboard/help", icon: <Headset size={18} /> },
    ],
  },
];

const Sidebar = () => (
  <div className="sticky top-8">
    <div className="flex items-center gap-4">
      <Image
        alt="leerob image"
        className="rounded-full"
        height={40}
        src="https://github.com/leerob.png"
        width={40}
      />
      <div>
        <h2 className="-mb-1 font-bold">Lee Robinson</h2>
        <p className="text-muted-foreground text-sm">Administrator</p>
      </div>
    </div>
    <ul>
      {menuLinks.map((menuLink) => (
        <li className="mt-4" key={menuLink.title}>
          <span className="text-muted-foreground text-sm">
            {menuLink.title}
          </span>
          <div>
            {menuLink.links.map((link) => (
              <MenuItem key={link.name} link={link} />
            ))}
          </div>
        </li>
      ))}
    </ul>
    <button className="mt-2 flex items-center gap-4 p-2" type="button">
      <LogOutIcon size={18} /> Logout
    </button>
  </div>
);

export default Sidebar;
