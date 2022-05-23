import { ReactComponent as home } from "../assets/icons/home.svg";
import { ReactComponent as katalog } from "../assets/icons/katalog.svg";
import { ReactComponent as bag } from "../assets/icons/bag.svg";
import { ReactComponent as settings } from "../assets/icons/settings.svg";
import HomeDashboard from "../component/Dashboard/HomeDashboard";
import Katalog from "../component/Dashboard/Katalog";
import { Order } from "../component/Dashboard/Order";
import Settings from "../component/Dashboard/Settings";
import LatestOrders from "../component/Dashboard/HomeDashboard/LatestOrders";
import CreateProduct from "../component/Dashboard/Katalog/CreateProduct";
import TableMyProduct from "../component/Dashboard/Katalog/TableMyProduct";
import TableOrder from "../component/Dashboard/Order/Table";

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
    title: "Главная",
    path: "home/latest-orders",
    element: <LatestOrders />,
    child: [],
    hidden: true,
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
    path: "createproduct",
    element: <CreateProduct />,
    child: [],
    hidden: true,
  },
  {
    id: 22,
    title: "Каталог",
    path: "catalog/my-product-table",
    element: <TableMyProduct />,
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
    id: 44,
    Icons: bag,
    path: "order/table",
    element: <TableOrder />,
    child: [],
    hidden: true,
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
