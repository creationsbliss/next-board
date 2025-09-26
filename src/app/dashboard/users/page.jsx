import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/pagination/Pagination";
import Search from "@/components/search/Search";

const UsersPage = () => (
  <div className="mt-4 flex flex-col gap-4 rounded-sm bg-sidebar-accent p-4">
    <div className="flex items-center justify-between">
      <Search placeholder={"Search for a user"} />

      <Link
        className="rounded-sm bg-chart-2/20 px-2 py-1 text-sm hover:bg-chart-2/30"
        href="/dashboard/users/add"
        type="button"
      >
        Add New
      </Link>
    </div>

    <table className="w-full">
      <thead className="font-medium">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Created At</td>
          <td>Role</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2">
            <div className="flex items-center gap-2">
              <Image
                alt="leerob image"
                className="rounded-full"
                height={30}
                src="https://github.com/leerob.png"
                width={30}
              />
              Lee Rohibson
            </div>{" "}
          </td>
          <td className="py-2">lee@gmail.com</td>
          <td className="py-2">
            {new Date().getMonth()}.{new Date().getDate()}.
            {new Date().getFullYear()}
          </td>
          <td>Admin</td>
          <td>Active</td>
          <td className="py-2">
            <div className="flex gap-2">
              <Link
                className="rounded-sm bg-chart-4/20 px-2 py-1 text-sm"
                href="/"
                type="button"
              >
                View
              </Link>
              <button
                className="rounded-sm bg-chart-1/20 px-2 py-1 text-sm"
                type="button"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <Pagination />
  </div>
);

export default UsersPage;
