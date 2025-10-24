import { useEffect } from "react";
import { Row, Col, Spin } from "antd";
import EventCard from "../components/EventCard";
import Container from "../components/Container";
import { useEventsStore } from "../store/useEventsStore";
import { useTranslation } from "react-i18next";

export default function Events() {
  const { events, loading, fetchEvents } = useEventsStore();
  const { t } = useTranslation();
  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  return (
    <Container>
      <section className="py-16 bg-gray-50 min-h-screen pt-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-red-700 drop-shadow-sm">
            {t("events.title")}{" "}
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            {t("events.description")}{" "}
          </p>
        </div>

        {/* <CityFilter
          cities={uniqueCities}
          selectedCity={selectedCity}
          // onChange={setSelectedCity}
        /> */}
        <div className="max-w-7xl mx-auto px-4">
          {events.length > 0 ? (
            <Row gutter={[32, 32]}>
              {events.map((e, i) => (
                <Col key={i} xs={24} sm={12} md={8}>
                  <EventCard location={""} image={""} {...e} />
                </Col>
              ))}
            </Row>
          ) : (
            <p className="text-center text-gray-500 italic mt-12">
              No events found
            </p>
          )}
        </div>
      </section>
    </Container>
  );
}
