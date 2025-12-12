import { Outlet } from 'react-router-dom';

import { useStyles } from './AuthLayout.styles';

export const AuthLayout = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  );
};
