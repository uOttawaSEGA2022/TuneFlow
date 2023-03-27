import { MatxSuspense } from 'app/components';
import useSettings from 'app/hooks/useSettings';
import { MatxLayouts } from './indexfr';

const MatxLayout = (props) => {
  const { settings } = useSettings();
  const Layout = MatxLayouts[settings.activeLayout];

  return (
    <MatxSuspense>
      <Layout {...props} />
    </MatxSuspense>
  );
};

export default MatxLayout;
