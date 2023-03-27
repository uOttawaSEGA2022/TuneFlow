import { authRoles } from 'app/authfr/authRolesfr';
import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AppEchartfr = Loadable(lazy(() => import('./echarts/AppEchartfr')));

const chartsRoute = [{ path: 'fr/charts/echarts', element: <AppEchartfr />, auth: authRoles.editor }];

export default chartsRoute;
