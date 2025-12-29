// ResourcesPage.tsx
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../lib/api";
import { Button, Input } from "antd";
import { useTranslation } from "react-i18next";

const tabs = [
  { id: "medical", key: "medical" },
  { id: "housing", key: "housing" },
  { id: "support", key: "support" },
];

const ResourcesPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("medical");
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      toast.error(t("resources.errorMessage"));
      return;
    }

    setLoading(true);
    try {
      await api.post("/support/question", {
        question: question.trim(),
        name: name.trim() || undefined,
        phone: phone.trim() || undefined,
      });
      toast.success(t("resources.successMessage"));
      setQuestion("");
      setName("");
      setPhone("");
    } catch (error) {
      toast.error(t("resources.errorMessage"), error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800 mt-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        {t("resources.title")}
      </h1>

      <div className="flex flex-wrap justify-center mb-10 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 text-sm md:text-base font-semibold transition-all ${
              activeTab === tab.id
                ? "border-b-4 border-red-700 text-red-700"
                : "text-gray-500 hover:text-red-600"
            }`}
          >
            {t(`resources.${tab.key}Title`) || t(`resources.${tab.id}`)}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-6 leading-relaxed">
        {activeTab === "medical" && (
          <>
            <h2 className="text-2xl font-semibold mb-3 text-red-600">
              {t("resources.medicalTitle")}
            </h2>
            <p>{t("resources.medicalText")}</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <b>Medicaid</b> — {t("resources.medicalList.medicaid")}
              </li>
              <li>
                <b>Marketplace Insurance</b> —{" "}
                {t("resources.medicalList.marketplace")}{" "}
                <a
                  href="https://www.healthcare.gov"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  healthcare.gov
                </a>
              </li>
              <li>
                <b>Emergency Medicaid</b> —{" "}
                {t("resources.medicalList.emergency")}
              </li>
            </ul>
            <p>{t("resources.communityCenters")}</p>
          </>
        )}

        {activeTab === "housing" && (
          <>
            <h2 className="text-2xl font-semibold mb-3 text-red-600">
              {t("resources.housingTitle")}
            </h2>
            <p>{t("resources.housingText")}</p>
            <p>
              {t("resources.housingTemp")}{" "}
              <a
                href="https://www.zillow.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Zillow
              </a>
              ,{" "}
              <a
                href="https://www.craigslist.org"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Craigslist
              </a>{" "}
              жана{" "}
              <a
                href="https://www.indeed.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Indeed
              </a>
              .
            </p>
          </>
        )}

        {activeTab === "support" && (
          <>
            <h2 className="text-2xl font-semibold mb-3 text-red-600">
              {t("resources.supportTitle")}
            </h2>
            <p className="mb-6">{t("resources.supportText")}</p>

            <form
              onSubmit={handleSubmitQuestion}
              className="mt-6 bg-gray-50 p-6 rounded-xl shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input
                  placeholder={t("resources.namePlaceholder")}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-lg"
                />
                <Input
                  placeholder={t("resources.phonePlaceholder")}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-lg"
                />
              </div>

              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder={t("resources.questionPlaceholder")}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 resize-none"
                rows={6}
                required
              />

              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                size="large"
                block
                className="mt-6 h-12 text-lg font-bold bg-red-700 hover:bg-red-800 rounded-xl shadow-lg"
              >
                {t("resources.submitButton")}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;
