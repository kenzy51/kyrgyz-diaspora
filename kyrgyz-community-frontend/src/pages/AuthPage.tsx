// AuthPage.tsx
import React, { useEffect } from "react";
import { Form, Input, Button, Typography, Card, Spin } from "antd";
import { useAuthStore } from "../store/useAuthStore";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

interface UserType {
  name?: string;
  phone: string;
  password: string;
  email?: string;
}

const AuthPage: React.FC = () => {
  const { t } = useTranslation();
  const { register, login, loading, user, checkAuth } = useAuthStore();
  const [isLogin, setIsLogin] = React.useState(true);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const onFinish = async (values: UserType) => {
    try {
      if (isLogin) {
        await login({ phone: values.phone, password: values.password });
      } else {
        await register({
          name: values.name || "",
          phone: values.phone,
          password: values.password,
          email: values.email || "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading && !user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Spin size="large" />
      </div>
    );
  }

  if (user) {
    return null;
  }

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
                {isLogin ? t("auth.welcomeBack") : t("auth.joinCommunity")}
              </Title>
              <Text type="secondary">
                {isLogin ? t("auth.loginSubtitle") : t("auth.registerSubtitle")}
              </Text>
            </div>

            <Form
              layout="vertical"
              onFinish={onFinish}
              form={form}
              autoComplete="off"
              requiredMark={false}
            >
              {!isLogin && (
                <Form.Item
                  label={
                    <span className="font-medium text-gray-700">
                      {t("auth.fullName")}
                    </span>
                  }
                  name="name"
                  rules={[
                    {
                      required: true,
                      message:
                        t("auth.enterTitle") || "Please enter your full name",
                    },
                  ]}
                >
                  <Input
                    placeholder={t("auth.placeholderName")}
                    size="large"
                    className="rounded-md"
                  />
                </Form.Item>
              )}

              <Form.Item
                label={
                  <span className="font-medium text-gray-700">
                    {t("auth.phoneNumber")}
                  </span>
                }
                name="phone"
                rules={[
                  {
                    required: true,
                    message:
                      t("auth.enterPhone") || "Please enter your phone number",
                  },
                ]}
              >
                <Input
                  placeholder={t("auth.placeholderPhone")}
                  size="large"
                  className="rounded-md"
                />
              </Form.Item>

              <Form.Item
                label={
                  <span className="font-medium text-gray-700">
                    {isLogin ? t("auth.password") : t("auth.createPassword")}
                  </span>
                }
                name="password"
                rules={[
                  {
                    required: true,
                    message:
                      t("auth.enterPassword") || "Please enter your password",
                  },
                ]}
              >
                <Input.Password
                  placeholder={t("auth.placeholderPassword")}
                  size="large"
                  className="rounded-md"
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                size="large"
                block
                className="bg-red-700 hover:bg-red-800 font-semibold rounded-md h-12"
              >
                {isLogin ? t("auth.login") : t("auth.register")}
              </Button>
            </Form>

            <div className="text-center mt-6">
              <Text type="secondary">
                {isLogin ? t("auth.noAccount") : t("auth.hasAccount")}{" "}
                <Button
                  type="link"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    form.resetFields();
                  }}
                  className="text-red-600 font-semibold hover:underline !p-0"
                >
                  {isLogin
                    ? t("auth.switchToRegister")
                    : t("auth.switchToLogin")}
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
