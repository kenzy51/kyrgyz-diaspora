import { Card } from "antd";
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";

type EventProps = {
  title: string;
  date: string;
  location: string;
  city: string;
  image?: string;
};

export default function EventCard({ title, date, location, city }: EventProps) {
  const formattedDate = new Date(date).toLocaleString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Card
      hoverable
      className="rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
    >
      <h3 className="text-lg font-semibold text-red-700">{title}</h3>
      <p className="flex items-center gap-2 text-gray-700 mt-2">
        <CalendarOutlined className="text-red-500" /> {formattedDate}
      </p>
      <p className="flex items-center gap-2 text-gray-700 mt-1">
        <EnvironmentOutlined className="text-green-600" /> {city}
      </p>
      <p className="flex items-center gap-2 text-gray-700 mt-1">
        <EnvironmentOutlined className="text-green-600" /> {location}
      </p>
    </Card>
  );
}
