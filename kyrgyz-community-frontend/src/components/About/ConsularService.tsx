import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const ConsularService: React.FC = () => {
  return (
    <Panel
      header={
        <div className="flex items-center text-lg md:text-xl font-semibold text-red-700">
          <span className="mr-3 text-2xl">🛂</span> Consular Services
        </div>
      }
      key="1"
      className="text-gray-700 text-lg leading-relaxed p-4 md:p-6"
    >
      <div className="space-y-4">
        <p>
          We help community members with{" "}
          <strong>official consular services</strong> to make your life in the
          U.S. easier and stress-free. Our services include:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            📑 Assistance with <strong>passport renewals</strong>
          </li>
          <li>
            🪪 Support with <strong>ID replacements</strong>
          </li>
          <li>
            📅 Scheduling and guidance for{" "}
            <strong>consular appointments</strong>
          </li>
        </ul>

        <p>
          Whether you are updating your documents or need guidance for your next
          consular visit, our team is here to support you step by step.
        </p>

        <div className="mt-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd3MfOsOtZ4WR1xlb6E7dIPexGeKtzlmGk5RnDQaeU-sfo9eA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-red-700 transition text-center text-lg font-medium"
          >
            Submit a Request Online
          </a>
        </div>
      </div>
    </Panel>
  );
};

export default ConsularService;
