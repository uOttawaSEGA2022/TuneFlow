import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const NotFoundfr = Loadable(lazy(() => import('./NotFoundfr')));
const ForgotPasswordfr = Loadable(lazy(() => import('./ForgotPasswordfr')));
const JwtLoginfr = Loadable(lazy(() => import('./JwtLoginfr')));
const JwtRegisterfr = Loadable(lazy(() => import('./JwtRegisterfr')));

const sessionRoutes = [
  { path: 'fr/session/signup', element: <JwtRegisterfr /> },
  { path: 'fr/session/signin', element: <JwtLoginfr /> },
  { path: 'fr/session/forgot-password', element: <ForgotPasswordfr /> },
  { path: 'fr/session/404', element: <NotFoundfr /> },
];

export default sessionRoutes;
