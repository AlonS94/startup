import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  wrapper: {
    padding: token.paddingSM,
    backgroundColor: token.colorBgContainer,
    borderRadius: 24,
    width: '100%',

    '@media (min-width: 768px)': {
      padding: token.paddingLG,
      width: '500px',
    },
  },
}));
