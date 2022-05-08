import Auth from "../component/Auth";
import LogOut from "../component/Auth/LogOut";
import Password from "../component/Auth/Password";
import Register from "../component/Auth/Register";
import Verify from "../component/Auth/Verify";
import { Discount } from "../component/Discount";
import Generic from "../component/Generic";
import HomePage from "../pages/Home";

export const navbarData = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <HomePage />,
    child: [],
    hidden: true,
  },
  {
    id: 2,
    title: "Аукцион",
    path: "/discount",
    element: <Discount />,
    child: [],
  },
  {
    id: 3,
    title: "Мужское",
    path: "/boys",
    element: <Generic />,
    child: [],
  },
  {
    id: 4,
    title: "Женское",
    path: "/girls",
    element: <Generic />,
    child: [],
  },
  {
    id: 5,
    title: "Аксессуары",
    path: "/accessory",
    element: <Generic />,
    child: [],
  },
  {
    id: 6,
    title: "Магазины",
    path: "/shop",
    element: <Generic />,
    child: [
      {
        id: 1,
        path: "product",
        element: <Generic />,
      },
      {
        id: 2,
        path: "buy",
        element: <Generic />,
      },
      {
        id: 3,
        path: "discount",
        element: <Generic />,
      },
    ],
  },
  {
    id: 7,
    title: "Auth",
    path: "/auth",
    element: <Auth />,
    hidden: true,
    child: [
      {
        id: 10,
        path: "register",
        element: <Register />,
      },
      {
        id: 11,
        path: "verify",
        element: <Verify />,
      },
      {
        id: 12,
        path: "password",
        element: <Password />,
      },
      {
        id: 13,
        path: "logout",
        element: <LogOut />,
      },
    ],
  },
];
