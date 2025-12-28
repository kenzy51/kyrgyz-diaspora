// Dashboard.tsx
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Button, Card, Avatar, Typography } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Dashboard = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <br />
        <br />
        <Card className="shadow-2xl rounded-3xl border-0 overflow-hidden">
          <div className="text-center py-12 px-8">
            <Avatar
              size={100}
              icon={<UserOutlined />}
              className="mb-6 bg-red-600 text-white text-4xl shadow-xl border-4 border-white"
            />

            <Title level={1} className="!text-4xl !font-extrabold !text-gray-900 !mb-3">
              Welcome back, {user?.name || "User"}! 👋
            </Title>

            <Text type="secondary" className="text-lg block mb-10 text-gray-600">
              You're successfully logged into the Kyrgyz Diaspora community platform.
            </Text>

            {/* User Info Box */}
            <div className="bg-gray-50 rounded-2xl p-8 mx-auto max-w-md">
              <div className="space-y-5 text-left">
                <div className="flex justify-between items-center">
                  <Text strong className="text-gray-700">Phone Number</Text>
                  <Text className="font-medium text-gray-900">
                    {user?.phone || "Not provided"}
                  </Text>
                </div>

                {user?._id && (
                  <div className="flex justify-between items-center">
                    <Text strong className="text-gray-700">User ID</Text>
                    <Text className="text-xs font-mono bg-gray-200 px-3 py-1 rounded-lg">
                      {user._id}
                    </Text>
                  </div>
                )}

                <div className="pt-5 border-t border-gray-300 text-center">
                  <Text type="success" strong className="text-green-600 text-lg">
                    ✓ Full profile loaded
                  </Text>
                </div>
              </div>
            </div>

            {/* Sign Out Button */}
            <div className="mt-12">
              <Button
                type="primary"
                danger
                size="large"
                icon={<LogoutOutlined />}
                onClick={handleLogout}
                className="px-12 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </Card>

        {/* Future Activity Section */}
        <div className="mt-20 text-center">
          <Title level={2} className="!text-3xl !font-bold !text-gray-800 mb-6">
            Your Activity
          </Title>

          <div className="bg-white rounded-2xl shadow-lg p-10 max-w-3xl mx-auto">
            <Text className="text-xl text-gray-600 leading-relaxed">
              Events you've joined, donations made, and community updates will appear here soon.<br />
              We're building tools to help Kyrgyz people in New York stay connected and support each other.
            </Text>

            <div className="mt-8 text-2xl">🇰🇬 Coming soon...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;