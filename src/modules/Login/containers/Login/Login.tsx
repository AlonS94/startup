import { Button, Checkbox, Flex, Form, Input, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { useStores } from 'store/StoreProvider';

import { IUser } from 'types/user';

import { useStyles } from './Login.styles';

export const Login = () => {
  const { styles } = useStyles();
  const { user } = useStores();

  const navigate = useNavigate();

  const onFinish = (userData: IUser) => {
    try {
      user.login(userData);
      navigate('/');
    } catch (e) {
      console.log('неправиьно');
    }
  };

  return (
    <div className={styles.wrapper}>
      <Typography.Title level={1}>Вход</Typography.Title>
      <Typography.Title level={5}>не вводи настоящие данные, это тест версия</Typography.Title>
      <Form name="login" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Не заполнено поле - почта' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Укажите свой пароль' }]}>
          <Input prefix={<LockOutlined />} type="password" placeholder="Пароль" />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Flex vertical gap="small">
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Запомнить меня</Checkbox>
              </Form.Item>
            </Flex>
            <Flex vertical gap="small">
              <Button block type="primary" htmlType="submit">
                Войти
              </Button>
              <Flex gap={4}>
                Нет аккаунта? <a href="/auth/registration">Зарегистрироваться</a>
              </Flex>
            </Flex>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
};
