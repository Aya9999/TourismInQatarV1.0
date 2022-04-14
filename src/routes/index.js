import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';
// import Calendar from 'src/pages/Calendar';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/dashboard/one" replace />,
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/one" replace />, index: true },
        { path: 'one', element: <HomePage /> },
        { path: 'two', element: <Calendar /> },
        { path: 'three', element: <PageThree /> },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/four" replace />, index: true },
            { path: 'four', element: <PageFour /> },
            { path: 'five', element: <PageFive /> },
            { path: 'six', element: <PageSix /> },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
        { path: 'details/pearl', element: <PearlPage /> },
        { path: 'details/souq', element: <SouqPage /> },
        { path: 'details/musherib', element: <MusheribPage /> },
        { path: 'details/lusail', element: <LusailPage /> },
        { path: 'details/katara', element: <KataraPage /> },
        { path: 'details/corniche', element: <CornichePage /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}


// Dashboard
const HomePage = Loadable(lazy(() => import('../pages/HomePage')));
const Calendar = Loadable(lazy(() => import('../pages/Calendar')));
const PageThree = Loadable(lazy(() => import('../pages/Feedback')));
const PageFour = Loadable(lazy(() => import('../pages/PageFour')));
const PageFive = Loadable(lazy(() => import('../pages/PageFive')));
const PageSix = Loadable(lazy(() => import('../pages/PageSix')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));

// DETAILS
const PearlPage =  Loadable(lazy(() => import('../pages/details/Pearl')));
const SouqPage =  Loadable(lazy(() => import('../pages/details/Souq_Waqif')));
const MusheribPage =  Loadable(lazy(() => import('../pages/details/Musherib')));
const LusailPage =  Loadable(lazy(() => import('../pages/details/Lusail')));
const KataraPage =  Loadable(lazy(() => import('../pages/details/Katara')));
const CornichePage =  Loadable(lazy(() => import('../pages/details/Corniche')));