import Image from "next/image";

const SingleProductPage = () => (
  <div className="mt-4 flex items-start gap-4">
    <div className="flex-1 rounded-sm bg-sidebar-accent p-4">
      <div className="relative h-[300px] w-full overflow-hidden rounded-sm">
        <Image alt="image" fill src="https://github.com/leerob.png" />
      </div>
      <h1 className="mt-2 font-bold text-muted-foreground">Iphone 17</h1>
    </div>

    <div className="flex-3 rounded-sm bg-sidebar-accent p-4">
      <form action="" className="flex flex-col gap-4">
        <label className="text-sm" htmlFor="title">
          Title
        </label>
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground text-sm outline-none"
          id="username"
          name="title"
          placeholder="Iphone 17"
          required
          type="text"
        />
        <label className="text-sm" htmlFor="category">
          Category
        </label>
        <select
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground text-sm outline-none"
          id="category"
          name="category"
          required
        >
          <option value="computer">Computer</option>
          <option value="phone">Phone</option>
          <option value="watch">Watch</option>
        </select>
        <label className="text-sm" htmlFor="price">
          Price
        </label>
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground text-sm outline-none"
          id="price"
          name="price"
          placeholder="$20"
          required
          type="number"
        />
        <label className="text-sm" htmlFor="stock">
          Stock
        </label>
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground text-sm outline-none"
          id="stock"
          name="stock"
          placeholder="37"
          required
          type="number"
        />
        <label className="text-sm" htmlFor="color">
          Color
        </label>
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground text-sm outline-none"
          id="color"
          name="color"
          placeholder="Black"
          type="text"
        />
        <label className="text-sm" htmlFor="size">
          Size
        </label>
        <input
          className="rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground text-sm outline-none"
          id="size"
          name="size"
          placeholder="XL"
          type="text"
        />
        <label className="text-sm" htmlFor="description">
          Description
        </label>
        <textarea
          className="mt-2 w-full rounded-sm border-2 border-sidebar-border bg-transparent p-2 text-muted-foreground text-sm outline-none"
          id="description"
          name="description"
          placeholder="sm"
          required
          rows="16"
        />

        <button
          className="mt-2 w-[130px] cursor-pointer rounded-sm bg-chart-2/20 p-3 text-sm hover:bg-chart-2/30"
          type="submit"
        >
          Update Product
        </button>
      </form>
    </div>
  </div>
);

export default SingleProductPage;
