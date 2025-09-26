import { UsersIcon } from "lucide-react";

const Card = () => (
  <div className="flex w-full gap-4 rounded-sm bg-sidebar-accent p-4 hover:bg-sidebar-border">
    <div className="flex h-10 w-10 items-center justify-center rounded-full border-1 border-chart-2/40 bg-chart-2/10">
      <UsersIcon size={18} />
    </div>
    <div className="flex flex-col gap-2">
      <h2>Total Users</h2>
      <p className="font-medium text-xl">11.573</p>
      <p className="text-sm">
        <span className="text-chart-2"> 15% </span> increases last week
      </p>
    </div>
  </div>
);

export default Card;
