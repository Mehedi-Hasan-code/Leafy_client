import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Forget from '../pages/Forget';
import Loading from '../components/common/Loading';
import ShareTip from '../pages/ShareTip';
import PrivateRoute from '../Private/PrivateRoute'
import ExploreGardeners from '../pages/ExploreGardeners';
import BrowseTips from '../pages/BrowseTips';
import MyTips from '../pages/MyTips';
import Update from '../pages/Update';
import TipDetails from '../pages/TipDetails';

export let router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => fetch('http://localhost:3000/active-gardeners'),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: 'signin',
        Component: SignIn,
      },
      {
        path: 'signup',
        Component: SignUp,
      },
      {
        path: 'forgetPassword',
        Component: Forget,
      },
      {
        path: 'explore-gardeners',
        Component: ExploreGardeners,
        loader: async () => fetch('http://localhost:3000/gardeners'),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: 'browse-tips',
        Component: BrowseTips,
        loader: async () => fetch('http://localhost:3000/public-tips'),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: 'share-a-garden-tip',
        element: <PrivateRoute><ShareTip></ShareTip></PrivateRoute>
      },
      {
        path: 'my-tips',
        element: <PrivateRoute><MyTips></MyTips></PrivateRoute>
      },
      {
        path: 'update-tip/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
      },
      {
        path: 'tip-details/:id',
        element: <PrivateRoute><TipDetails></TipDetails></PrivateRoute>,
        loader: async ({ params }) =>
          fetch(`http://localhost:3000/tip/${params.id}`),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
]);
