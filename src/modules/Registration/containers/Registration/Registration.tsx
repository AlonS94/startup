import { useNavigate } from 'react-router-dom';
import { Button, Flex, Form, Input, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import { useStores } from 'store/StoreProvider';

import { validatePassword } from 'utils/validatePassword';
import { IUser } from 'types/user';

import { useStyles } from './Registration.styles';

export const Registration = () => {
  const { styles } = useStyles();
  const { user } = useStores();

  const navigate = useNavigate();

  const onFinish = (userData: IUser) => {
    user.register(userData);
    navigate('/');
  };

  return (
    <div className={styles.wrapper}>
      <Typography.Title level={1}>Регистрация</Typography.Title>
      <Typography.Title level={5}>не вводи настоящие данные, это тест версия</Typography.Title>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        validateTrigger="onSubmit"
      >
        <Form.Item name="mail" rules={[{ required: true, message: 'Не заполнено поле - почта' }]}>
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Укажите свой пароль' },
            {
              validator: validatePassword,
              message:
                'Пароль должен быть не менее 8 символов, содержать буквы, цифру и спецсимвол',
            },
          ]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Пароль" />
        </Form.Item>
        <Form.Item
          name="confirm password"
          rules={[
            { required: true, message: 'Укажите ещё раз пароль' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('Пароли не совпадают');
              },
            }),
          ]}
        >
          <Input prefix={<LockOutlined />} type="password" placeholder="Подтвердите пароль" />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }}>
          <Flex vertical align="center" gap="middle">
            <Button block type="primary" htmlType="submit">
              Зарегистрироваться
            </Button>
            <Flex gap={4}>
              Есть учётная запись? <a href="/auth/login">Войти</a>
            </Flex>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  );
};
