import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header></Header>
      <div className="container-fluid container-lg my-5 my-5">{children}</div>
      <Footer></Footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
