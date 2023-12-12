import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Container } from "../../containers";
import { listMenuBasedOnUser } from "../../constants";

const Layout = ({children}) => {
  const isLogin = true;
  const user = { role: "admin" };
  return (
    <>
      {!isLogin ? (
        <main className="flex">
          <div className="m-auto">
            <h1>You need login or register</h1>
            <Link to="/login" className="text-blue-500">
              Login
            </Link>

            <Link to="/register" className="text-red-500 block">
              register
            </Link>
          </div>
        </main>
      ) : (
        <Container listMenuBasedOnUser={listMenuBasedOnUser[user.role]}>
          {children}
        </Container>
      )}
    </>
  );
};

Layout.propTypes = {
    children: PropTypes.node
}
export default Layout;
