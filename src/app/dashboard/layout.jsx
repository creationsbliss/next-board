import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

const Layout = ({ children }) => (
  <div className="flex">
    <div className="flex-1 bg-sidebar-accent p-5">
      <Sidebar />
    </div>
    <div className="flex-4 bg-green-500 p-5">
      <Navbar />
      <div>{children}</div>
    </div>
  </div>
);

export default Layout;
