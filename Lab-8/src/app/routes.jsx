import AuthGuard from 'app/auth/AuthGuard';
import chartsRoute from 'app/views/charts/ChartsRoute';
import dashboardRoutes from 'app/views/dashboard/DashboardRoutes';
import uploadRoutes from 'app/views/upload/UploadRoutes';
import ecommerceRoutes from 'app/views/ecommerce/ecommerceRoutes';
import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import NotFound from 'app/views/sessions/NotFound';
import sessionRoutes from 'app/views/sessions/SessionRoutes';
import { Navigate } from 'react-router-dom';
import MatxLayout from './components/MatxLayout/MatxLayout';

import AuthGuardfr from 'app/authfr/AuthGuardfr';
import chartsRoutefr from 'app/views/chartsfr/ChartsRoutefr';
import dashboardRoutesfr from 'app/views/dashboardfr/DashboardRoutesfr';
import uploadRoutesfr from 'app/views/uploadfr/UploadRoutesfr';
import ecommerceRoutesfr from 'app/views/ecommercefr/ecommerceRoutesfr';
// import materialRoutes from 'app/views/material-kit/MaterialRoutes';
import NotFoundfr from 'app/views/sessionsfr/NotFoundfr';
import sessionRoutesfr from 'app/views/sessionsfr/SessionRoutesfr';
// import { Navigate } from 'react-router-dom';
import MatxLayoutfr from './components/MatxLayoutfr/MatxLayout';

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [...dashboardRoutes, ...chartsRoute, ...materialRoutes, ...uploadRoutes, ...ecommerceRoutes]

  },
...sessionRoutes,
  { path: '/', element: <Navigate to="dashboard/default" /> },
  { path: '*', element: <NotFound /> },

    {
    element: (
      <AuthGuardfr>
        <MatxLayoutfr />
      </AuthGuardfr>
    ),
    children: [...dashboardRoutesfr, ...chartsRoutefr, ...materialRoutes, ...uploadRoutesfr, ...ecommerceRoutesfr]
  },
  ...sessionRoutesfr,
  { path: '/fr', element: <Navigate to="/fr/dashboard/default" /> },
  { path: '*', element: <NotFoundfr /> },

];

export default routes;

// const routes = [
//   {
//     element: (
//       <AuthGuardfr>
//         <MatxLayoutfr />
//       </AuthGuardfr>
//     ),
//     children: [...dashboardRoutesfr, ...chartsRoutefr, ...materialRoutes, ...uploadRoutesfr, ...ecommerceRoutesfr]
//   },
//   ...sessionRoutesfr,
//   { path: '/', element: <Navigate to="/fr/dashboard/default" /> },
//   { path: '*', element: <NotFoundfr /> },

// ];

// export default routes;
