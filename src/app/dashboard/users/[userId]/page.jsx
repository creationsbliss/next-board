import Image from "next/image";

const SingleUserPage = () => (
  <div className="mt-4 flex items-start gap-4">
    <div className="flex-1 rounded-sm bg-sidebar-accent p-4">
      <div className="relative h-[300px] w-full overflow-hidden rounded-sm">
        <Image alt="image" fill src="https://github.com/leerob.png" />
      </div>
      <h1 className="mt-2 font-bold text-muted-foreground">Lee Robinson</h1>
    </div>

    <div className="flex-3 bg-sidebar-accent p-4">
      <form action="" className="flex flex-col gap-2">
        <label className="text-sm" htmlFor="username">
          Usename
        </label>
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          id="username"
          name="title"
          placeholder="Title"
          required
          type="text"
        />
        <label className="text-sm" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          id="email"
          name="email"
          placeholder="Email"
          required
          type="email"
        />
        <label className="text-sm" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          id="password"
          name="password"
          placeholder="Password"
          required
          type="password"
        />
        <label className="text-sm" htmlFor="phone">
          Phone
        </label>
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          id="phone"
          name="phone"
          placeholder="Phone"
          type="phone"
        />
        <label className="text-sm" htmlFor="address">
          Address
        </label>
        <textarea
          className="mt-2 w-full rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          id="address"
          name="address"
          placeholder="address"
          required
          rows="16"
        />
        <label className="text-sm" htmlFor="isAdmin">
          isAdmin
        </label>
        <select
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          id="isAdmin"
          name="isAdmin"
          required
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
        <label className="text-sm" htmlFor="isActive">
          isActive
        </label>
        <select
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          id="isActive"
          name="isAdmin"
          required
        >
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
        <button
          className="mt-2 w-[120px] cursor-pointer rounded-sm bg-chart-2/20 p-3 text-sm hover:bg-chart-2/30"
          type="submit"
        >
          Update User
        </button>
      </form>
    </div>
  </div>
);

export default SingleUserPage;
