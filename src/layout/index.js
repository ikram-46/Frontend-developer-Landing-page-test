import FooterUI from "./Footer";
import NavbarUI from "./Navbar";
import "./style.scss";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <NavbarUI />
      <main>
        {children}
      </main>
      <FooterUI />
    </div>
  );
};

export default Layout;
