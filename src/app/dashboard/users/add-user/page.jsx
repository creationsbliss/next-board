const AddUserpage = () => (
  <div className="mt-4 rounded-sm bg-sidebar-accent p-4">
    <form action="">
      <div className="grid grid-cols-2 gap-4">
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          name="title"
          placeholder="Title"
          required
          type="text"
        />
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          name="email"
          placeholder="Email"
          required
          type="email"
        />
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          name="password"
          placeholder="Password"
          required
          type="password"
        />
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          name="phone"
          placeholder="Phone"
          type="phone"
        />
        <select
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          name="isAdmin"
          required
        >
          <option value={false}>Is Admin</option>
          <option value={false}>No</option>
          <option value={true}>Yes</option>
        </select>
        <select
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          name="isActive"
          required
        >
          <option value={true}>Is Active</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      <textarea
        className="mt-4 w-full rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
        name="address"
        placeholder="Address"
        required
        rows="16"
      />
      <button
        className="mt-2 cursor-pointer rounded-sm bg-chart-2/20 p-3 text-sm hover:bg-chart-2/30"
        type="submit"
      >
        Add User
      </button>
    </form>
  </div>
);

export default AddUserpage;
