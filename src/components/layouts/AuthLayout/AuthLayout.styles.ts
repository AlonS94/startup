import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  wrapper: {
    display: 'flex',
    placeItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    alignItems: 'center',
    boxSizing: 'border-box',
    flex: 1,
    backgroundColor: token.colorBgLayout,
  },
}));
