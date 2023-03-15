import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Upload = Loadable(lazy(() => import('./UploadModal')));

const uploadRoutes = [
  { path: '/upload', element: <Upload />, auth: authRoles.admin },
];

export default uploadRoutes;