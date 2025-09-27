import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/pagination/Pagination";
import Search from "@/components/search/Search";

const ProductsPage = () => (
  <div className="mt-4 flex flex-col gap-10 rounded-sm bg-sidebar-accent p-4">
    <div className="flex items-center justify-between">
      <Search placeholder={"Search for a product..."} />

      <Link
        className="rounded-sm bg-chart-2/20 px-2 py-1 text-sm hover:bg-chart-2/30"
        href="/dashboard/products/add-product"
        type="button"
      >
        Add Product
      </Link>
    </div>

    <table className="w-full">
      <thead className="font-medium">
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>CreatedAt</td>
          <td>Stock</td>
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
              Iphone 17
            </div>{" "}
          </td>
          <td className="py-2">Potenti feugiat dolor primis</td>
          <td>$123</td>
          <td className="py-2">
            {new Date().getMonth()}.{new Date().getDate()}.
            {new Date().getFullYear()}
          </td>
          <td>37</td>
          <td className="py-2">
            <div className="flex gap-2">
              <Link
                className="rounded-sm bg-chart-4/20 px-2 py-1 text-sm"
                href={"/dashboard/products/123"}
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
      </tbody>
    </table>

    <Pagination />
  </div>
);

export default ProductsPage;
