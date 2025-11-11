import React, { useState } from "react";
import { Form, Input, Button, Typography, Card } from "antd";
import { useAuthStore } from "../store/useAuthStore";
import { motion, AnimatePresence } from "framer-motion";

const { Title, Text } = Typography;

interface UserType {
  name: string;
  phone: string;
  password: string;
}

const AuthPage: React.FC = () => {
  const { register, login, loading } = useAuthStore();
  const [isLogin, setIsLogin] = useState(true);

  const onFinish = async (values: UserType) => {
    if (isLogin) {
      await login({ phone: values.phone, password: values.password });
    } else {
      await register({
        name: values.name,
        phone: values.phone,
        password: values.password,
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4">
      <Card
        style={{
          width: "100%",
          maxWidth: 400,
          borderRadius: 16,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? "login" : "register"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center mb-8">
              <Title
                level={2}
                className="!text-red-700 !mb-2"
                style={{ fontWeight: 800 }}
              >
                {isLogin ? "Welcome Back 👋" : "Join Our Community ❤️"}
              </Title>
              <Text type="secondary">
                {isLogin
                  ? "Log in to continue exploring events and donations"
                  : "Create an account to join our growing diaspora platform"}
              </Text>
            </div>

            <Form
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
              requiredMark={false}
            >
              {!isLogin && (
                <Form.Item
                  label={
                    <span className="font-medium text-gray-700">Full Name</span>
                  }
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your full name" },
                  ]}
                >
                  <Input
                    placeholder="e.g. Kanat Nazarov"
                    size="large"
                    className="rounded-md"
                  />
                </Form.Item>
              )}

              <Form.Item
                label={
                  <span className="font-medium text-gray-700">
                    Phone Number
                  </span>
                }
                name="phone"
                rules={[
                  { required: true, message: "Please enter your phone number" },
                ]}
              >
                <Input
                  placeholder="+1 (929) 325-9094"
                  size="large"
                  className="rounded-md"
                />
              </Form.Item>

              <Form.Item
                label={
                  <span className="font-medium text-gray-700">
                    {isLogin ? "Password" : "Create a Password"}
                  </span>
                }
                name="password"
                rules={[
                  { required: true, message: "Please enter your password" },
                ]}
              >
                <Input.Password
                  placeholder="••••••••"
                  size="large"
                  className="rounded-md"
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                size="large"
                className="w-full bg-red-700 hover:bg-red-800 font-semibold rounded-md"
              >
                {isLogin ? "Login" : "Register"}
              </Button>
            </Form>

            <div className="text-center mt-6">
              <Text type="secondary">
                {isLogin
                  ? "Don’t have an account?"
                  : "Already have an account?"}{" "}
                <Button
                  type="link"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-red-600 font-semibold hover:underline !p-0"
                >
                  {isLogin ? "Register" : "Login"}
                </Button>
              </Text>
            </div>
          </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  );
};

export default AuthPage;
