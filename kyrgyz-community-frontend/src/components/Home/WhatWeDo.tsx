// components/WhatWeDo/WhatWeDo.tsx
import { motion } from "framer-motion";
import Container from "../Container";
import womanYurt from "../../assets/WhatWeDo.png";
import { Card, Col, Row } from "antd";
import { useTranslation } from "react-i18next";

export const WhatWeDo = () => {
  const { t } = useTranslation();

  const items = [
    {
      title: t("whatWeDo.eventsTitle"),
      text: t("whatWeDo.eventsText"),
    },
    {
      title: t("whatWeDo.resourcesTitle"),
      text: t("whatWeDo.resourcesText"),
    },
    {
      title: t("whatWeDo.aboutTitle"),
      text: t("whatWeDo.aboutText"),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-7xl font-bold text-red-700 mb-4">
            {t("whatWeDo.title")}
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-2xl">
            {t("whatWeDo.description")}
          </p>
        </motion.div>

        <div className="mb-12 flex justify-center">
          <img
            src={womanYurt}
            alt={t("whatWeDo.imageAlt") || "Kyrgyz woman helping near yurt"}
            className="w-full max-w-sm rounded-xl shadow-lg"
          />
        </div>

        <Row gutter={[32, 32]}>
          {items.map((item, idx) => (
            <Col xs={24} md={8} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
              >
                <Card
                  hoverable
                  variant="outlined" // ← Fixed deprecated bordered warning
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
