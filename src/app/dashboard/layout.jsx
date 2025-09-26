import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

const Layout = ({ children }) => (
  <div className="flex">
    <div className="flex-1 bg-sidebar-accent p-6">
      <Sidebar />
    </div>
    <div className="500 flex-4 p-6">
      <Navbar />
      <div>{children}</div>
    </div>
  </div>
);

export default Layout;
