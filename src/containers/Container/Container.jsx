import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Logo, LogoutIcon } from "../../assets/svgs";

const Container = ({ listMenuBasedOnUser, children }) => {
  return (
    <main className="w-full h-[100vh] flex bg-dark-line">
      <aside
        className="w-[104px] max-h-screen bg-dark-bg-2 flex flex-col items-center 
      gap-10 rounded-tr-[10px] rounded-br-[10px] overflow-auto"
      >
        {/* Logo */}
        <div className="mt-4 p-4 bg-[#EB966A]/30 rounded-lg">
          <Logo className="w-[28px] h-[28px]" />
        </div>

        {/* List menu features */}
        <ul className="flex flex-col gap-4">
          {listMenuBasedOnUser.map((item, index) => (
            <>
            <li key={index}>
              <NavLink to={item.path}>
                {
                  <div className="p-4 hover:bg-[#EB966A]/30 rounded-lg">
                    <item.icon className="fill-primary w-[20px] h-[20px]" />
                  </div>
                }
              </NavLink>
            </li>
            </>
          ))}
        </ul>

        <button>{
          <LogoutIcon className="fill-primary w-[20px] h-[20px] mb-10"></LogoutIcon>
        }</button>
      </aside>

      <section className="grow overflow-y-auto">
        <div className="m-4">
          {children}
        </div>
      </section>
    </main>
  );
};

Container.propTypes = {
  listMenuBasedOnUser: PropTypes.array,
  children: PropTypes.node,
};

export default Container;
