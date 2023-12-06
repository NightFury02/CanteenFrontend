import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Logo, LogoutIcon } from "../../assets/svgs";

const Container = ({ listMenuBasedOnUser, children }) => {
  return (
    <main className="w-full h-[100vh] flex bg-dark-line">
      <aside
        className="w-[104px] bg-dark-bg-2 flex flex-col items-center 
      gap-10 rounded-tr-[10px] rounded-br-[10px]"
      >
        {/* Logo */}
        <div className="mt-4 p-4 bg-[#EB966A]/30 rounded-lg">
          <Logo className="w-[34px] h-[32px]" />
        </div>

        {/* List menu features */}
        <ul className="flex flex-col gap-3">
          {listMenuBasedOnUser.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path}>
                {
                  <div className="p-4 hover:bg-[#EB966A]/30 rounded-lg">
                    <item.icon className="fill-primary w-[20px] h-[20px]" />
                  </div>
                }
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Logout button */}
        <button>{
          <LogoutIcon className="fill-primary w-[20px] h-[20px] my-3"></LogoutIcon>
        }</button>
      </aside>

      <section className="grow">{children}</section>
    </main>
  );
};

Container.propTypes = {
  listMenuBasedOnUser: PropTypes.array,
  children: PropTypes.node,
};

export default Container;
