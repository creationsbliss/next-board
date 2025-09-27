const AddProductPage = () => (
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
        <select
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          name="category"
        >
          <option value="general">Select Category</option>
          <option value="computer">Computer</option>
          <option value="phone">Phone</option>
          <option value="watch">Watch</option>
        </select>

        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          name="price"
          placeholder="Price"
          required
          type="number"
        />
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          name="stock"
          placeholder="Stock"
          required
          type="number"
        />
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          name="color"
          placeholder="Color"
          required
          type="text"
        />
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
          name="size"
          placeholder="Size"
          required
          type="text"
        />
      </div>
      <textarea
        className="mt-4 w-full rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground outline-none"
        name="description"
        placeholder="Description"
        required
        rows="16"
      />
      <button
        className="mt-2 cursor-pointer rounded-sm bg-chart-2/20 p-3 text-sm hover:bg-chart-2/30"
        type="submit"
      >
        Add Product
      </button>
    </form>
  </div>
);

export default AddProductPage;
