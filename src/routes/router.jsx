import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Forget from "../pages/Forget";
import Loading from "../components/common/Loading";

export let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => fetch('http://localhost:3000/active-gardeners'),
        hydrateFallbackElement: <Loading />
      },
      {
        path: 'signin',
        Component: SignIn
      },
      {
        path: 'signup',
        Component: SignUp
      },
      {path: 'forgetPassword',
        Component: Forget
      }
    ],
  },
]);
