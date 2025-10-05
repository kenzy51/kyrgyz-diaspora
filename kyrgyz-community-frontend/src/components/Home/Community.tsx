import { motion } from "framer-motion";
import Container from "../Container";
import { Col, Row } from "antd";
import photo1 from "../../../public/images/community/bizdin.png";
import eje from "../../../public/images/community/eje.jpg";
import people from "../../../public/images/community/example21.jpg";
import football from "../../../public/images/community/football.jpg";
import children from "../../../public/images/community/children.jpg";
import flags from "../../../public/images/community/flags.jpg";

const community = [photo1, people, children, football, eje, flags];
const Community = () => {
  return (
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
  );
};

export default Community;
