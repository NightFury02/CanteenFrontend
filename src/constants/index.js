import { HomeIcon, SettingIcon, EditIcon, LogoutIcon, Management, NotificationIcon, InventoryIcon, DashboardIcon } from "../assets/svgs";

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
  admin: [
    {
      path: "/",
      icon: HomeIcon,
    },
    {
      path: "/admin/dashboard",
      icon: DashboardIcon,
    },
    {
      path: "/admin/inventory",
      icon: InventoryIcon,
    },
    {
      path: "/admin/orders",
      icon: NotificationIcon,
    },
    {
      path: "/admin/management",
      icon: Management,
    }
  ],
};

export { listMenuBasedOnUser };
