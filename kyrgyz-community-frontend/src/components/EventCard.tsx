// components/EventCard/EventCard.tsx
import { Card, Tag, Avatar } from "antd";
import { CalendarOutlined, EnvironmentOutlined, UserOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { format } from "date-fns";


type EventProps = {
  _id: string;
  title: string;
  date: string;
  city: string;
  location: string;
  creatorName: string;
  creatorPhone: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
};

export default function EventCard({
  title,
  date,
  city,
  location,
  creatorName,
  creatorPhone,
}: EventProps) {
  const formattedDate = format(new Date(date), "EEEE, MMMM d, yyyy 'at' h:mm a");



  return (
    <Card
      hoverable
      className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
      bodyStyle={{ padding: "24px" }}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      {/* Date & Time */}
      <div className="flex items-center gap-3 text-gray-700 mb-3">
        <CalendarOutlined className="text-xl text-red-600" />
        <span className="font-medium">{formattedDate}</span>
      </div>

      {/* Location */}
      <div className="flex items-start gap-3 text-gray-700 mb-6">
        <EnvironmentOutlined className="text-xl text-green-600 mt-1" />
        <div>
          <p className="font-medium">{city}</p>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>

      {/* Creator Info */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
        <Avatar
          size={48}
          icon={<UserOutlined />}
          className="bg-red-600 text-white flex items-center justify-center"
        >
          {creatorName.charAt(0).toUpperCase()}
        </Avatar>
        <div>
          <p className="font-semibold text-gray-800">Created by {creatorName}</p>
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <ClockCircleOutlined /> {creatorPhone}
          </p>
        </div>
      </div>
    </Card>
  );
}