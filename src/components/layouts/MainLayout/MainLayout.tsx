import { Outlet } from 'react-router-dom';

import { ProtectedRoute } from '../ProtectedRoute';

import { useStyles } from './MainLayout.styles';

export const MainLayout = () => {
  const { styles } = useStyles();

  return (
    <ProtectedRoute>
      <div className={styles.wrapper}>
        <Outlet />
      </div>
    </ProtectedRoute>
  );
};
