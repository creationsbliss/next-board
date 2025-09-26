import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";

const Layout = ({ children }) => (
  <div className="flex">
    <div className="min-h-screen flex-1 bg-sidebar-accent p-6">
      <Sidebar />
    </div>
    <div className="flex-4 p-6">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  </div>
);

export default Layout;
