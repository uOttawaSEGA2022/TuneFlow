import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../authfr/authRolesfr';

const Analyticsfr = Loadable(lazy(() => import('./Analyticsfr')));

const dashboardRoutes = [
  { path: '/fr/dashboard/default', element: <Analyticsfr />, auth: authRoles.admin },
];

export default dashboardRoutes;
