import { useState } from "react";
import { Form, Input, DatePicker, Select, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const { Option } = Select;

export default function CreateEvent() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const payload = {
        ...values,
        date: values.date.format("MMMM DD, YYYY"),
      };

      const res = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to create event");

      navigate("/events");
      toast.success("Wow so easy!")

    } catch (err) {
      alert("Error creating event");
      toast.error(err)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 pt-24">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-red-700">
          Create New Event
        </h1>

        <Form layout="vertical" onFinish={onFinish}>
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
            <Input placeholder="Enter location" />
          </Form.Item>

          <Form.Item
            name="image"
            label="Image URL"
            rules={[{ required: true }]}
          >
            <Input placeholder="Paste image URL" />
          </Form.Item>

          <Form.Item label="Upload Image (optional)">
            <Upload beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Button type="primary" htmlType="submit" loading={loading} block>
            Create Event
          </Button>
        </Form>
      </div>
    </div>
  );
}
