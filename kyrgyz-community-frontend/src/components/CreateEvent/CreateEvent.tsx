/* eslint-disable @typescript-eslint/no-explicit-any */
// components/CreateEvent/CreateEvent.tsx
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  Typography,
  Result,
} from "antd";
import { useEventsStore } from "../../store/useEventsStore";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/useAuthStore";

const { Title, Text } = Typography;
const { Option } = Select;

export default function CreateEvent() {
  const { t } = useTranslation();
  const { createEvent, loading } = useEventsStore();
  const { user } = useAuthStore(); 
  const [form] = Form.useForm();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center py-16 px-4">
        <Card className="max-w-md mx-auto text-center shadow-2xl rounded-3xl p-10">
          <Result
            status="403"
            title="Login Required"
            subTitle="You must be logged in to create a community event."
            extra={
              <Button
                type="primary"
                size="large"
                className="mt-6 bg-red-600 hover:bg-red-700"
                onClick={() => navigate("/auth")}
              >
                Go to Login
              </Button>
            }
          />
          <Text type="secondary" className="block mt-6">
            After logging in, you can share events with the Kyrgyz diaspora!
          </Text>
        </Card>
      </div>
    );
  }

  const onFinish = async (values: any) => {
    const payload = {
      title: values.title,
      date: values.date.toISOString(),
      city: values.city,
      location: values.location,
    };
    await createEvent(payload);
    form.resetFields();
    navigate("/events");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-2xl rounded-3xl border-0 overflow-hidden">
          <div className="text-center py-10 px-8 bg-gradient-to-b from-red-50 to-white">
            <Title
              level={1}
              className="!text-4xl !font-bold !text-red-700 !mb-4"
            >
              Create New Event
            </Title>
            <Text className="text-lg text-gray-600">
              Share your community gathering with Kyrgyz people across the US
            </Text>
          </div>

          <div className="p-8 pt-10">
            {/* Show who is creating the event */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-8 text-center">
              <Text strong className="block text-lg text-green-900">
                This event will be created by:
              </Text>
              <Text className="text-2xl font-bold text-green-800 mt-2">
                {user.name}
              </Text>
              <Text className="block text-lg text-green-700 mt-1">
                {user.phone}
              </Text>
            </div>

            <Form layout="vertical" onFinish={onFinish} form={form}>
              <Form.Item
                name="title"
                label={
                  <span className="font-semibold text-gray-800">
                    Event Title <span className="text-red-600">*</span>
                  </span>
                }
                rules={[
                  { required: true, message: "Please enter the event title" },
                ]}
              >
                <Input
                  size="large"
                  placeholder="e.g. Nooruz Celebration in Brooklyn"
                  className="rounded-lg"
                />
              </Form.Item>

              <Form.Item
                name="date"
                label={
                  <span className="font-semibold text-gray-800">
                    Date & Time <span className="text-red-600">*</span>
                  </span>
                }
                rules={[
                  { required: true, message: "Please select date and time" },
                ]}
              >
                <DatePicker
                  showTime
                  size="large"
                  className="w-full rounded-lg"
                  placeholder="Select date and time"
                />
              </Form.Item>

              <Form.Item
                name="city"
                label={
                  <span className="font-semibold text-gray-800">
                    City <span className="text-red-600">*</span>
                  </span>
                }
                rules={[{ required: true, message: "Please select a city" }]}
              >
                <Select
                  size="large"
                  placeholder="Select city"
                  className="rounded-lg"
                >
                  <Option value="New York">New York</Option>
                  <Option value="Chicago">Chicago</Option>
                  <Option value="Los Angeles">Los Angeles</Option>
                  <Option value="Philadelphia">Philadelphia</Option>
                  <Option value="Washington DC">Washington DC / DMV</Option>
                  <Option value="San Francisco">San Francisco</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="location"
                label={
                  <span className="font-semibold text-gray-800">
                    Venue / Address <span className="text-red-600">*</span>
                  </span>
                }
                rules={[
                  { required: true, message: "Please enter the location" },
                ]}
              >
                <Input
                  size="large"
                  placeholder="e.g. 1829 East 13th Street, Brooklyn, NY"
                  className="rounded-lg"
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                size="large"
                block
                className="mt-8 h-14 text-xl font-bold rounded-xl bg-red-600 hover:bg-red-700 shadow-lg"
              >
                Create Event
              </Button>
            </Form>

            <Text type="secondary" className="block text-center mt-6">
              Your event will be reviewed and published soon.
            </Text>
          </div>
        </Card>
      </div>
    </div>
  );
}
