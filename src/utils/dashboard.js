import { ReactComponent as home } from "../assets/icons/home.svg";
import { ReactComponent as katalog } from "../assets/icons/katalog.svg";
import { ReactComponent as bag } from "../assets/icons/bag.svg";
import { ReactComponent as settings } from "../assets/icons/settings.svg";
import HomeDashboard from "../component/Dashboard/HomeDashboard";
import Katalog from "../component/Dashboard/Katalog";
import { Order } from "../component/Dashboard/Order";
import Settings from "../component/Dashboard/Settings";
import CreateProduct from "../component/Dashboard/CreateProduct";
import LatestOrders from "../component/Dashboard/HomeDashboard/LatestOrders";

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
    id: 1,
    Icons: home,
    title: "Главная",
    path: "latest-orders",
    element: <LatestOrders />,
    child: [],
    hidden: true
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
    Icons: katalog,
    title: "CreateProduct",
    path: "createproduct",
    element: <CreateProduct />,
    child: [],
    hidden: true,
  },
  {
    id: 4,
    Icons: bag,
    title: "Заказы",
    path: "order",
    element: <Order />,
    child: [],
  },
  {
    id: 5,
    Icons: settings,
    title: "Магазин",
    path: "settings",
    element: <Settings />,
    child: [],
  },
];
