import { Card } from "antd";
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";

type EventProps = {
  title: string;
  date: string;
  location: string;
  image: string;
};

export default function EventCard({
  title,
  date,
  location,
  image,
}: EventProps) {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={title}
          src={image}
          className="h-48 w-full object-cover rounded-t-xl"
        />
      }
      className="rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1"
    >
      <h3 className="text-lg font-semibold text-red-700">{title}</h3>
      <p className="flex items-center gap-2 text-gray-700 mt-2">
        <CalendarOutlined className="text-red-500" /> {date}
      </p>
      <p className="flex items-center gap-2 text-gray-700 mt-1">
        <EnvironmentOutlined className="text-green-600" /> {location}
      </p>
    </Card>
  );
}
