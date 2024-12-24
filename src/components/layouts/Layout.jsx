import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <div className="container-fluid container-lg my-5">{children}</div>
      <Footer></Footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
