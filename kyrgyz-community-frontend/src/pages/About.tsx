import Container from "../components/Container";
import { motion } from "framer-motion";
import { Collapse } from "antd";
import yurta from '../assets/yurta.svg'

import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

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

      <section className="py-20 bg-white">
        <Container>
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl font-bold text-red-700 mb-6">
                Mission & Vision
              </h2>
              <ul className="space-y-6 text-lg text-gray-700">
                <li className="p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                  <strong className="text-red-700">
                    Language Revitalization
                  </strong>
                  — reconnecting with the Kyrgyz language.
                </li>
                <li className="p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                  <strong className="text-red-700">
                    Cultural Preservation
                  </strong>
                  — events, workshops, and education to nurture heritage.
                </li>
              </ul>
            </div>
            <motion.img
              src={yurta}
              alt="Kyrgyz Culture"
              className="rounded-2xl shadow-lg object-cover h-80 w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </Container>
      </section>

      <section className="py-20 bg-red-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-red-700 mb-10">
              Our Services
            </h2>
            <Collapse
              accordion
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <Panel header="Consular Services" key="1">
                Assistance with passport renewals, ID replacements, and consular
                appointments.
              </Panel>
              <Panel header="Parcel Delivery" key="2">
                Reliable shipping to Kyrgyzstan, Kazakhstan, and Turkmenistan.
                <br />
                <strong>Contact:</strong> 302-332-2979
              </Panel>
              <Panel header="Tax Services & Consultations" key="3">
                Partnership with BK Tax Solutions. Members get a{" "}
                <strong>10% discount</strong>.
                <br />
                <strong>Contact:</strong> 929-556-6272
              </Panel>
            </Collapse>
          </motion.div>
        </Container>
      </section>

      {/* Contact & Map */}
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

      {/* Events */}
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
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow-md transition">
              Submit an Event
            </button>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
