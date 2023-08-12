import Auth from "../screens/auth/Auth";
import Home from "../screens/home/Home";

export const routes = [
  {
    path: "/",
    component: Home,
    isAuth: false,
  },
  {
    path: "/auth",
    component: Auth,
    isAuth: false,
  },
];
