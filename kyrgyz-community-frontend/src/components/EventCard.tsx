// components/EventCard/EventCard.tsx
import { Card, Avatar } from "antd";
import {
  CalendarOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const formattedDate = format(
    new Date(date),
    "EEEE, MMMM d, yyyy 'at' h:mm a"
  );

  return (
    <Card
      hoverable
      variant="outlined"
      className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
      bodyStyle={{ padding: "24px" }}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>

      <div className="flex items-center gap-3 text-gray-700 mb-4">
        <CalendarOutlined className="text-2xl text-red-600" />
        <span className="font-medium text-lg">{formattedDate}</span>
      </div>

      {/* Location */}
      <div className="flex items-start gap-3 text-gray-700 mb-8">
        <EnvironmentOutlined className="text-2xl text-green-600 mt-1" />
        <div>
          <p className="font-semibold text-lg">{city}</p>
          <p className="text-base text-gray-600">{location}</p>
        </div>
      </div>

      {/* Creator Info */}
      <div className="flex items-center gap-4 pt-5 border-t border-gray-200">
        <Avatar
          size={56}
          icon={<UserOutlined />}
          className="bg-red-600 text-white text-2xl flex items-center justify-center shadow-md"
        >
          {creatorName.charAt(0).toUpperCase()}
        </Avatar>
        <div>
          <p className="font-bold text-gray-800 text-lg">
            {t("eventCard.createdBy")} {creatorName}
          </p>
          <p className="text-base text-gray-600 flex items-center gap-2 mt-1">
            <UserOutlined className="text-sm" /> {creatorPhone}
          </p>
        </div>
      </div>
    </Card>
  );
}
