import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-white m-auto">
      <h2 className="">Đăng nhập</h2>
      <div>
        <span>Nếu bạn chưa có tài khoản</span>
        <span>
          Bạn có thể <Link to="/register">đăng ký tại đây</Link>
        </span>
      </div>

      <form>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Enter your email address" />
        </div>

        <div>
          <label>Mật khẩu</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button type="submit" className="">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
