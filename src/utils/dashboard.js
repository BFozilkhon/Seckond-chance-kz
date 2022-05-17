import { ReactComponent as home } from "../assets/icons/home.svg";
import { ReactComponent as katalog } from "../assets/icons/katalog.svg";
import { ReactComponent as bag } from "../assets/icons/bag.svg";
import { ReactComponent as settings } from "../assets/icons/settings.svg";
import Generic from "../component/Generic";
import HomeDashboard from "../component/Dashboard/HomeDashboard";
import Katalog from "../component/Dashboard/Katalog";
import { Order } from "../component/Dashboard/Order";
import Settings from "../component/Dashboard/Settings";

export const dashboardData = [
  {
    id: 1,
    Icons: home,
    title: "Главная",
    path: "home",
    element: <HomeDashboard />,
    child: [],
  },
  {
    id: 2,
    Icons: katalog,
    title: "Каталог",
    path: "catalog",
    element: <Katalog />,
    child: [],
  },
  {
    id: 3,
    Icons: bag,
    title: "Заказы",
    path: "order",
    element: <Order />,
    child: [],
  },
  {
    id: 4,
    Icons: settings,
    title: "Магазин",
    path: "settings",
    element: <Settings />,
    child: [],
  },
];
