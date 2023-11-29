import { HomeIcon, SettingIcon } from "../assets/svgs";

const listMenuBasedOnUser = {
  user: [
    {
      path: "/",
      icon: HomeIcon,
    },
    {
      path: "/user/orders",
      icon: SettingIcon,
    },
  ],
  staff: [
    {
      path: "/",
      icon: HomeIcon,
    },
    {
      path: "/staff/dashboard",
      icon: HomeIcon,
    },
    {
      path: "/staff/add-menu",
      icon: HomeIcon,
    },
    {
      path: "/staff/inventory",
      icon: HomeIcon,
    },
    {
      path: "/staff/manage-inventory",
      icon: HomeIcon,
    },
  ],
  admin: [],
};

export { listMenuBasedOnUser };
