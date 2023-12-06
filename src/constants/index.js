import { HomeIcon, SettingIcon, EditIcon, LogoutIcon, NotificationIcon, InventoryIcon, DashboardIcon } from "../assets/svgs";

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
      icon: DashboardIcon,
    },
    {
      path: "/staff/inventory",
      icon: InventoryIcon,
    },
    {
      path: "/staff/add-menu",
      icon: EditIcon,
    },
    
    {
      path: "/staff/orders",
      icon: NotificationIcon,
    },
    {
      path: "/staff/setting",
      icon: SettingIcon,
    },
  ],
  admin: [],
};

export { listMenuBasedOnUser };
