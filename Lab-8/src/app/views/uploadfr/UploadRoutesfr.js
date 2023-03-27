import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../authfr/authRolesfr';

const Uploadfr = Loadable(lazy(() => import('./UploadModalfr')));

const uploadRoutes = [
  { path: 'fr/upload', element: <Uploadfr />, auth: authRoles.admin },
];

export default uploadRoutes;