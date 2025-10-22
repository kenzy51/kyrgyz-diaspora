/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, DatePicker, Select, Button } from "antd";
import { useEventsStore } from "../../store/useEventsStore";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const { Option } = Select;

export default function CreateEvent() {
  const { t } = useTranslation();
  const { createEvent, loading } = useEventsStore();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
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
          {t("createEvent.title")}
        </h1>

        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label={t("createEvent.eventTitle")}
            rules={[{ required: true, message: t("enterTitle") }]}
          >
            <Input placeholder={t("enterTitle")} />
          </Form.Item>

          <Form.Item
            name="date"
            label={t("createEvent.date")}
            rules={[{ required: true, message: t("createEvent.selectDate") }]}
          >
            <DatePicker className="w-full" placeholder={t("createEvent.selectDate")} />
          </Form.Item>

          <Form.Item
            name="city"
            label={t("createEvent.city")}
            rules={[{ required: true, message: t("createEvent.selectCity") }]}
          >
            <Select placeholder={t("createEvent.selectCity")}>
              <Option value="New York">New York</Option>
              <Option value="Chicago">Chicago</Option>
              <Option value="Los Angeles">Los Angeles</Option>
              <Option value="Houston">Philadelphia</Option>
              <Option value="San Francisco">DMV</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="location"
            label={t("createEvent.location")}
            rules={[{ required: true, message: t("createEvent.enterLocation") }]}
          >
            <Input placeholder={t("createEvent.enterLocation")} />
          </Form.Item>

          <Button type="primary" htmlType="submit" loading={loading} block>
            {t("createEvent.createButton")}
          </Button>
        </Form>
      </div>
    </div>
  );
}
