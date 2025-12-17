import { Button, Checkbox, Flex, Form, Input, Typography } from 'antd';
import { observer } from 'mobx-react-lite';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { useStores } from 'store/StoreProvider';

import { getLoginUser } from 'utils/auth';
import { IUser } from 'types/user';

import { useStyles } from './Login.styles';

export const Login = observer(() => {
  const { styles } = useStyles();
  const { user } = useStores();

  const navigate = useNavigate();

  const onFinish = (userData: IUser) => {
    user.fetchLogin(userData, () => navigate('/'));
  };

  return (
    <div className={styles.wrapper}>
      <Typography.Title level={1}>Вход</Typography.Title>
      <Form
        name="login"
        initialValues={{ remember: true, login: getLoginUser() ?? '' }}
        onFinish={onFinish}
      >
        <Form.Item name="login" rules={[{ required: true, message: 'Не заполнено поле - login' }]}>
          <Input prefix={<UserOutlined />} placeholder="login" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Укажите свой пароль' }]}>
          <Input prefix={<LockOutlined />} type="password" placeholder="Пароль" />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Flex vertical gap="small">
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox
                  checked={user.isRemember}
                  onChange={({ target: { checked } }) => user.changeIsRemember(checked)}
                >
                  Запомнить меня
                </Checkbox>
              </Form.Item>
            </Flex>
            <Flex vertical gap="small">
              <Button block type="primary" htmlType="submit" loading={user.isLoading}>
                Войти
              </Button>
              <Flex gap={4}>
                Нет аккаунта?
                <Typography.Link onClick={() => navigate('/auth/registration')}>
                  Зарегистрироваться
                </Typography.Link>
              </Flex>
            </Flex>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
});
