import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Forget from "../pages/Forget";

export let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
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
