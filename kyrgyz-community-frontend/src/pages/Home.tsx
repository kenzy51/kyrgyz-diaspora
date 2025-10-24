/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { motion } from "framer-motion";
import { WhatWeDo } from "../components/Home/WhatWeDo";
import ornament from "../assets/kyrgyz12.png";
import Community from "../components/Home/Community";
import { useTranslation } from "react-i18next";
import centralAsianBackground from "../assets/centralAsianBackground.png";
export default function Home() {
  const { t } = useTranslation();

  const testimonials = t("home.whyJoin.testimonials", { returnObjects: true });

  return (
    <div className="bg-gray-50">
      <section
        className="relative w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${centralAsianBackground})`,
          minHeight: "90vh",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-[90vh] px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white drop-shadow-lg">
            {/* {t("home.heroTitle")} */}
            Central Asian Community in the USA
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-200 leading-relaxed">
            {/* {t("home.heroText")} */}
            Celebrating our shared heritage through events, connections, and
            creativity.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <Link to="/events">
              <Button
                type="primary"
                size="large"
                className="px-8 py-3 text-lg font-semibold"
              >
                {t("home.buttons.viewEvents")}
              </Button>
            </Link>
            <Link to="/resources">
              <Button
                size="large"
                className="px-8 py-3 text-lg font-semibold bg-white text-red-700 hover:!bg-gray-100"
              >
                {t("home.buttons.resources")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <WhatWeDo />
      <Community />

      <section className="py-20 bg-white">
        <Container>
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-red-700 mb-4">
              {t("home.whyJoin.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("home.whyJoin.description")}
            </p>
          </motion.div>

          <Row gutter={[24, 24]}>
            {/* @ts-ignore */}
            {testimonials.map((tst, idx) => (
              <Col xs={24} md={8} key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.2 }}
                >
                  <Card className="rounded-2xl shadow-lg h-full">
                    <p className="text-gray-600 mb-4 italic">“{tst.text}”</p>
                    <p className="font-semibold text-red-700">— {tst.name}</p>
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
              {t("home.joinCommunity.title")}
            </h2>
            <p className="text-red-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              {t("home.joinCommunity.text")}
            </p>
            <Link to="/createEvent">
              <Button
                type="primary"
                size="large"
                className="px-10 py-2 text-lg font-semibold bg-white text-red-700 hover:!bg-gray-100 shadow-md"
              >
                {t("home.joinCommunity.button")}
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
