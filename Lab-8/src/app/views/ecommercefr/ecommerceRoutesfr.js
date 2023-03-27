import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../authfr/authRolesfr';

const Checkoutfr = Loadable(lazy(() => import('./checkoutModalfr')));

const ecommerceRoutes = [
  { path: 'fr/ecommerce/checkout', element: <Checkoutfr />, auth: authRoles.admin },
];

export default ecommerceRoutes;