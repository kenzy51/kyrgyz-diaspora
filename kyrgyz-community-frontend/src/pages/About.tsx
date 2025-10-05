import Container from "../components/Container";
import { motion } from "framer-motion";
import { Button, Collapse } from "antd";
import aboutUs from "../assets/aboutUs.png";

import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import ParcelService from "../components/About/ParcelService";

const { Panel } = Collapse;

export default function About() {
  return (
    <div className="bg-gray-50">
      <section
        className="relative w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bizdinYurta.jpg')",
          minHeight: "75vh",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center min-h-[75vh] px-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-xl text-white mb-6">
            About Union KG NY
          </h1>
          <p className="mt-2 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200 drop-shadow-lg">
            A community-driven organization preserving Kyrgyz identity, culture,
            and unity across the U.S.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
      </section>

      <section className="py-24 bg-gradient-to-b from-white to-red-50">
        <Container>
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Text */}
            <div>
              <h2 className="text-4xl font-extrabold text-red-700 mb-8 relative">
                Mission & Vision
                <span className="block w-20 h-1 bg-red-600 mt-3 rounded"></span>
              </h2>

              <ul className="space-y-6 text-lg text-gray-700">
                <li className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                  <div className="text-2xl">📖</div>
                  <p>
                    <strong className="text-red-700">
                      Language Revitalization
                    </strong>{" "}
                    — We are passionately committed to facilitating the learning
                    of the Kyrgyz language, providing a platform for individuals
                    to reconnect with their roots.
                  </p>
                </li>
                <li className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                  <div className="text-2xl">🎭</div>
                  <p>
                    <strong className="text-red-700">
                      Cultural Preservation
                    </strong>{" "}
                    — Through events, workshops, and educational programs, we
                    aim to instill a sense of pride and appreciation for our
                    heritage.
                  </p>
                </li>
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={aboutUs}
                alt="Kyrgyz Culture"
                className="rounded-3xl shadow-2xl object-cover w-full h-full"
              />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="py-24 bg-gradient-to-b from-red-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-extrabold text-red-700 mb-12 text-center">
              Our Services
            </h2>

            <Collapse
              accordion
              expandIconPosition="end"
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              bordered={false}
            >
              <Panel
                header={
                  <div className="flex items-center text-lg md:text-xl font-semibold text-red-700">
                    <span className="mr-3 text-2xl">🛂</span> Consular Services
                  </div>
                }
                key="1"
                className="text-gray-700 text-lg leading-relaxed p-4 md:p-6"
              >
                Assistance with passport renewals, ID replacements, and consular
                appointments to make your life easier.
              </Panel>

              <ParcelService />

              <Panel
                header={
                  <div className="flex items-center text-lg md:text-xl font-semibold text-red-700">
                    <span className="mr-3 text-2xl">💼</span> Tax Services &
                    Consultations
                  </div>
                }
                key="3"
                className="text-gray-700 text-lg leading-relaxed p-4 md:p-6"
              >
                Partnership with BK Tax Solutions. Members get a{" "}
                <strong className="text-red-600">10% discount</strong>.
                <br />
                <strong>Contact:</strong> 929-556-6272
              </Panel>
            </Collapse>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 bg-gray-100">
        <Container>
          <motion.div
            className="grid md:grid-cols-2 gap-10 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl font-bold text-red-700 mb-6">
                Contact Us
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <EnvironmentOutlined className="text-red-600 mr-2" /> 1829
                  East 13th Street, Brooklyn, NY 11229
                </p>
                <p>
                  <PhoneOutlined className="text-red-600 mr-2" /> 929-325-9094
                </p>
                <p>
                  <MailOutlined className="text-red-600 mr-2" />{" "}
                  unionkgny@gmail.com
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Union KG NY Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.887628648694!2d-73.9577268845946!3d40.60802577934227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24453a4972c2d%3A0x5a3e3b6d36f4d8b3!2s1829%20E%2013th%20St%2C%20Brooklyn%2C%20NY%2011229%2C%20USA!5e0!3m2!1sen!2sus!4v1696275200000!5m2!1sen!2sus"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-red-700 mb-6">
              Upcoming Events
            </h2>
            <p className="text-gray-600 italic text-lg mb-6">
              No events at the moment. Stay tuned for announcements!
            </p>
            <Link to="/createEvent">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow-md transition">
                Submit an Event
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
