import { createBrowserRouter } from 'react-router';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Forget from '../pages/Forget';
import Loading from '../components/common/Loading';
import ShareTip from '../pages/ShareTip';
import PrivateRoute from '../Private/PrivateRoute';
import ExploreGardeners from '../pages/ExploreGardeners';
import BrowseTips from '../pages/BrowseTips';
import MyTips from '../pages/MyTips';
import Update from '../pages/Update';
import TipDetails from '../pages/TipDetails';
import NotFound from '../pages/NotFound';

export let router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: async () => {
          try {
            const response = await fetch(
              'https://leafy-server.vercel.app/active-gardeners'
            );
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          } catch (error) {
            console.error('Error fetching active gardeners:', error);
            throw error;
          }
        },
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
        loader: async () => {
          try {
            const response = await fetch(
              'https://leafy-server.vercel.app/gardeners'
            );
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          } catch (error) {
            console.error('Error fetching gardeners:', error);
            throw error;
          }
        },
        hydrateFallbackElement: <Loading />,
      },
      {
        path: 'browse-tips',
        Component: BrowseTips,
        loader: async () => {
          try {
            const response = await fetch(
              'https://leafy-server.vercel.app/public-tips'
            );
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          } catch (error) {
            console.error('Error fetching public tips:', error);
            throw error;
          }
        },
        hydrateFallbackElement: <Loading />,
      },
      {
        path: 'share-a-garden-tip',
        element: (
          <PrivateRoute>
            <ShareTip></ShareTip>
          </PrivateRoute>
        ),
      },
      {
        path: 'my-tips',
        element: (
          <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        ),
      },
      {
        path: 'update-tip/:id',
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        errorElement: <NotFound></NotFound>,
      },
      {
        path: 'tip-details/:id',
        element: (
          <PrivateRoute>
            <TipDetails></TipDetails>
          </PrivateRoute>
        ),
        errorElement: <NotFound></NotFound>,
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `https://leafy-server.vercel.app/tip/${params.id}`
            );
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          } catch (error) {
            console.error('Error fetching tip details:', error);
            throw error;
          }
        },
        hydrateFallbackElement: <Loading />,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);
