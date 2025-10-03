import { useState } from "react";
import { Row, Col } from "antd";
import EventCard from "../components/EventCard";
import Container from "../components/Container";
import CityFilter from "../components/Events/CityFilter";

const events = [
  {
    title: "Nowruz Celebration",
    date: "March 21, 2025",
    location: "Brooklyn, NY",
    city: "New York",
    image: "https://img9.irna.ir/d/r2/2021/03/15/4/164562170.jpg",
  },
  {
    title: "Kyrgyz Concert",
    date: "June 15, 2025",
    location: "Chicago, IL",
    city: "Chicago",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoCt8kb9FnF8Eu6E6S58qqwEy5QOLlnEYncA&s",
  },
  {
    title: "Football Tournament",
    date: "July 10, 2025",
    location: "Los Angeles, CA",
    city: "Los Angeles",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Kairat_Zhyrgalbek_Uulu_20191601.jpg",
  },
  {
    title: "Football Tournament",
    date: "July 10, 2025",
    location: "Philadelphia",
    city: "Pensilvania",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Kairat_Zhyrgalbek_Uulu_20191601.jpg",
  },
];

export default function Events() {
  const [selectedCity, setSelectedCity] = useState<string>("All Cities");

  const uniqueCities = [
    "All Cities",
    ...Array.from(new Set(events.map((e) => e.city))),
  ];

  const filteredEvents =
    selectedCity === "All Cities"
      ? events
      : events.filter((e) => e.city === selectedCity);

  return (
    <Container>
      <section className="py-16 bg-gray-50 min-h-screen pt-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-red-700 drop-shadow-sm">
            Upcoming Events
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover celebrations, concerts, sports tournaments, and cultural
            gatherings of the Kyrgyz diaspora across the United States.
          </p>
        </div>

        <CityFilter
          cities={uniqueCities}
          selectedCity={selectedCity}
          onChange={setSelectedCity}
        />
        <div className="max-w-7xl mx-auto px-4">
          {filteredEvents.length > 0 ? (
            <Row gutter={[32, 32]}>
              {filteredEvents.map((e, i) => (
                <Col key={i} xs={24} sm={12} md={8}>
                  <EventCard {...e} />
                </Col>
              ))}
            </Row>
          ) : (
            <p className="text-center text-gray-500 italic mt-12">
              No events found for {selectedCity}.
            </p>
          )}
        </div>
      </section>
    </Container>
  );
}
