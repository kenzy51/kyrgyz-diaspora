// components/Community/Community.tsx
import { motion } from "framer-motion";
import Container from "../Container";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";

import photo1 from "../../../public/images/community/bizdin.png";
import eje from "../../../public/images/community/eje.jpg";
import people from "../../../public/images/community/example21.jpg";
import football from "../../../public/images/community/football.jpg";
import children from "../../../public/images/community/children.jpg";
import flags from "../../../public/images/community/flags.jpg";

const communityImages = [photo1, people, children, football, eje, flags];

const Community = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-red-700 mb-6">
            {t("community.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("community.description")}
          </p>
        </motion.div>

        {/* Image Grid */}
        <Row gutter={[24, 24]}>
          {communityImages.map((src, idx) => (
            <Col xs={12} sm={12} md={8} lg={8} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={src}
                  alt={`${t("community.imageAlt")} ${idx + 1}`}
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Community;
