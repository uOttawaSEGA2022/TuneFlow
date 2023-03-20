import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Checkout = Loadable(lazy(() => import('./checkoutModal')));

const ecommerceRoutes = [
  { path: '/ecommerce/checkout', element: <Checkout />, auth: authRoles.admin },
];

export default ecommerceRoutes;