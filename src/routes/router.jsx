import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Forget from '../pages/Forget';
import Loading from '../components/common/Loading';
import ShareTip from '../pages/ShareTip';
import ExploreGardeners from '../pages/ExploreGardeners'
import BrowseTips from '../pages/BrowseTips'
import MyTips from '../pages/MyTips'

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
        loader: async () => fetch('http://localhost:3000/gardeners')
      },
      {
        path: 'browse-tips',
        Component: BrowseTips
      },
      {
        path: 'share-a-garden-tip',
        Component: ShareTip
      },
      {
        path: 'my-tips',
        Component: MyTips
      }
    ],
  },
]);
