import { Form, Input, DatePicker, Select, Button } from "antd";
import { useEventsStore } from "../../store/useEventsStore";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

export default function CreateEvent() {
  const { createEvent, loading } = useEventsStore();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log(loading);
    const payload = {
      title: values.title,
      date: values.date.toISOString(),
      city: values.city,
      location: values.location,
    };
    form.resetFields();

    await createEvent(payload);
    navigate("/events");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 pt-24">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-red-700">
          Create New Event
        </h1>

        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label="Event Title"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter event title" />
          </Form.Item>

          <Form.Item name="date" label="Date" rules={[{ required: true }]}>
            <DatePicker className="w-full" />
          </Form.Item>

          <Form.Item name="city" label="City" rules={[{ required: true }]}>
            <Select placeholder="Select a city">
              <Option value="New York">New York</Option>
              <Option value="Chicago">Chicago</Option>
              <Option value="Los Angeles">Los Angeles</Option>
              <Option value="Houston">Philadelphia</Option>
              <Option value="San Francisco">DMV</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: true }]}
          >
            <Input placeholder="Brooklyn, neptune av/Arlington heights, 13av" />
          </Form.Item>

          {/* <Form.Item
            name="image"
            label="Image URL"
            rules={[{ required: true }]}
          >
            <Input placeholder="Paste image URL" />
          </Form.Item> */}
          {/* 
          <Form.Item label="Upload Image (optional)">
            <Upload beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item> */}

          <Button type="primary" htmlType="submit" loading={loading} block>
            Create Event
          </Button>
        </Form>
      </div>
    </div>
  );
}
