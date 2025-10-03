import { Button, Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { motion } from "framer-motion";
import photo1 from "../../public/images/community/bizdin.png";
import eje from "../../public/images/community/eje.jpg";
import people from "../../public/images/community/example21.jpg";
import football from "../../public/images/community/football.jpg";
import children from "../../public/images/community/children.jpg";
import flags from "../../public/images/community/flags.jpg";
import ornament from "../assets/kyrgyz12.png";
import womanYurt from "../assets/WhatWeDo.png";

const community = [photo1, people, children, football, eje, flags];
export default function Home() {
  return (
    <div className="bg-gray-50">
      <section
        className="relative w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.forumdaily.com/wp-content/uploads/2020/05/shutterstock_1473913265.jpg')",
          minHeight: "90vh",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-[90vh] px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
            Kyrgyz Diaspora in the USA
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-200 leading-relaxed">
            Uniting Kyrgyz people across America through events, resources, and
            cultural pride 🇰🇬
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <Link to="/events">
              <Button
                type="primary"
                size="large"
                className="px-8 py-3 text-lg font-semibold"
              >
                View Events
              </Button>
            </Link>
            <Link to="/resources">
              <Button
                size="large"
                className="px-8 py-3 text-lg font-semibold bg-white text-red-700 hover:!bg-gray-100"
              >
                Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <WhatWeDo />
      <section className="py-20 bg-gray-100">
        <Container>
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-red-700 mb-4">Community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A glimpse into our culture, traditions, and unity.
            </p>
          </motion.div>
          <Row gutter={[16, 16]}>
            {community.map((src, idx) => (
              <Col xs={12} md={8} key={idx}>
                <motion.img
                  src={src}
                  alt={`Community ${idx}`}
                  className="rounded-xl shadow-md object-cover h-74 w-full hover:scale-105 transition-transform duration-500 shadow"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-red-700 mb-4">
              Why Join Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our members and see why being part of Union KG matters.
            </p>
          </motion.div>
          <Row gutter={[24, 24]}>
            {[
              {
                name: "Aizada",
                text: "Thanks to Union KG, I found a network of Kyrgyz friends in New York and never felt alone.",
              },
              {
                name: "Bakyt",
                text: "This platform helped me discover Kyrgyz concerts and connect with my roots.",
              },
              {
                name: "Saltanat",
                text: "Union KG is preserving our culture while supporting the new generation.",
              },
            ].map((t, idx) => (
              <Col xs={24} md={8} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.2 }}
                >
                  <Card className="rounded-2xl shadow-lg h-full">
                    <p className="text-gray-600 mb-4 italic">“{t.text}”</p>
                    <p className="font-semibold text-red-700">— {t.name}</p>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section
        className="relative py-20 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${ornament})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0" />

        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6 drop-shadow-lg">
              Join Our Community
            </h2>
            <p className="text-red-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Share events, support each other, and help preserve Kyrgyz culture
              in America. Together, we are stronger.
            </p>
            <Link to="/createEvent">
              <Button
                type="primary"
                size="large"
                className="px-10 py-2 text-lg font-semibold bg-white text-red-700 hover:!bg-gray-100 shadow-md"
              >
                Add Event
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
const WhatWeDo = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-7xl font-bold text-red-700 mb-4">What We Do</h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-2xl">
            Supporting Kyrgyz diaspora through events, resources, and community
            building.
          </p>
        </motion.div>
        <div className="mb-8 flex justify-center">
          <img
            src={womanYurt}
            alt="Kyrgyz woman helping near yurt"
            className="w-full max-w-sm rounded-xl shadow-lg"
          />
        </div>

        <Row gutter={[32, 32]}>
          {[
            {
              title: "📅 Events",
              text: "Concerts, holidays, sports tournaments, and meetups that bring us together.",
            },
            {
              title: "🤝 Resources",
              text: "Find businesses, jobs, immigration resources, organizations, and cultural centers within the Kyrgyz community.",
            },
            {
              title: "👥 About Us",
              text: "Learn about our mission to preserve Kyrgyz identity and empower immigrants.",
            },
          ].map((item, idx) => (
            <Col xs={24} md={8} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
              >
                <Card
                  hoverable
                  bordered={false}
                  className="rounded-2xl shadow-lg h-full"
                >
                  <h3 className="text-xl font-semibold text-red-700 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
