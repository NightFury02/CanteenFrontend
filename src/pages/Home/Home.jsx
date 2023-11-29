import { Link } from "react-router-dom";
import User from "../User/User";
import Admin from "../Admin/Admin";
import Staff from "../Staff/Staff";
import { Container } from "../../containers";
import { listMenuBasedOnUser } from "../../constants";

const rolesUser = {
  user: User,
  admin: Admin,
  staff: Staff,
};

const Home = () => {
  const isLogin = false;
  const user = { role: "admin" };
  const HomePage = rolesUser[user.role];

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
          <HomePage />
        </Container>
      )}
    </>
  );
};

export default Home;
