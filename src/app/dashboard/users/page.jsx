import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/pagination/Pagination";
import Search from "@/components/search/Search";
import { fetchUsers } from "@/lib/data";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const users = await fetchUsers(q, page);

  return (
    <div className="mt-4 flex flex-col gap-10 rounded-sm bg-sidebar-accent p-4">
      <div className="flex items-center justify-between">
        <Search placeholder={"Search for a user..."} />

        <Link
          className="rounded-sm bg-chart-2/20 px-2 py-1 text-sm hover:bg-chart-2/30"
          href="/dashboard/users/add-user"
          type="button"
        >
          Add User
        </Link>
      </div>

      <table className="w-full">
        <thead className="font-medium">
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>CreatedAt</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="py-2">
                <div className="flex items-center gap-2">
                  <Image
                    alt="user image"
                    className="rounded-full"
                    height={30}
                    src={user.image || "/default-profile.jpg"}
                    width={30}
                  />
                  {user.username}
                </div>
              </td>
              <td className="py-2">{user.email}</td>
              <td className="py-2">
                {user.createdAt?.toString().slice(4, 16)}
              </td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td>{user.isActive ? "Active" : "Inactive"}</td>
              <td className="py-2">
                <div className="flex gap-2">
                  <Link
                    className="rounded-sm bg-chart-4/20 px-2 py-1 text-sm"
                    href={`/dashboard/users/${user._id}`}
                    type="button"
                  >
                    Edit
                  </Link>
                  <button
                    className="cursor-pointer rounded-sm bg-chart-1/20 px-2 py-1 text-sm"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};

export default UsersPage;
