import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import Notifications from "views/Notifications.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import UserGuides from "views/UserGuides.jsx";
import UserProfile from "views/UserProfile.jsx";
import AdminPanel from "views/AdminPanel.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Strona główna",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user-guides",
    name: "Twoje poradniki",
    icon: "tim-icons icon-single-02",
    component: UserGuides,
    layout: "/admin"
  },
  {
    path: "/admin-panel",
    name: "Panel administratora",
    icon: "tim-icons icon-badge",
    component: AdminPanel,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Profil użytkownika",
    icon: "tim-icons icon-badge",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "tim-icons icon-atom",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin"
  }
];


export default routes;
