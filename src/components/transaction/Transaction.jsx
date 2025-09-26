import Image from "next/image";

const Transaction = () => (
  <div className="rounded-sm bg-sidebar-accent p-4">
    <h2 className="mb-6 text-xl">Transaction History</h2>
    <div>
      <table className="w-full">
        <thead className="font-medium">
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
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
            <td className="py-2">
              <span className="rounded-sm bg-chart-4/20 px-2 py-1 text-sm">
                Pending
              </span>
            </td>
            <td className="py-2">
              {new Date().getMonth()}.{new Date().getDate()}.
              {new Date().getFullYear()}
            </td>
            <td className="py-2">$21.30</td>
          </tr>

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
            <td className="py-2">
              <span className="rounded-sm bg-chart-1/20 px-2 py-1 text-sm">
                Cancelled
              </span>
            </td>
            <td className="py-2">
              {new Date().getMonth()}.{new Date().getDate()}.
              {new Date().getFullYear()}
            </td>
            <td className="py-2">$21.30</td>
          </tr>

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
            <td className="py-2">
              <span className="rounded-sm bg-chart-2/20 px-2 py-1 text-sm">
                Done
              </span>
            </td>
            <td className="py-2">
              {new Date().getMonth()}.{new Date().getDate()}.
              {new Date().getFullYear()}
            </td>
            <td className="py-2">$21.30</td>
          </tr>

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
            <td className="py-2">
              <span className="rounded-sm bg-chart-2/20 px-2 py-1 text-sm">
                Done
              </span>
            </td>
            <td className="py-2">
              {new Date().getMonth()}.{new Date().getDate()}.
              {new Date().getFullYear()}
            </td>
            <td className="py-2">$21.30</td>
          </tr>

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
            <td className="py-2">
              <span className="rounded-sm bg-chart-4/20 px-2 py-1 text-sm">
                Pending
              </span>
            </td>
            <td className="py-2">
              {new Date().getMonth()}.{new Date().getDate()}.
              {new Date().getFullYear()}
            </td>
            <td className="py-2">$21.30</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Transaction;
