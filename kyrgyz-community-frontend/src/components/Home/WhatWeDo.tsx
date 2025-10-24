import { motion } from "framer-motion";
import Container from "../Container";
import womanYurt from "../../assets/WhatWeDo.png";
import { Card, Col, Row } from "antd";

export const WhatWeDo = () => {
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
            Supporting
            {/* Kyrgyz  */}
            Central Asian diaspora through events, resources, and community
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
