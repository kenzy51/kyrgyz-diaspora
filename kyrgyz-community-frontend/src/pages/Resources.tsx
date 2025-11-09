import React, { useState } from "react";

const tabs = [
  { id: "medical", label: "Медицинская страховка" },
  { id: "housing", label: "Жильё и работа" },
  { id: "support", label: "Поддержка и вопросы" },
];

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState("medical");

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800 mt-12.5">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-700">
        Полезная информация для кыргызской диаспоры в США
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
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4 leading-relaxed">
        {activeTab === "medical" && (
          <>
            <h2 className="text-2xl font-semibold mb-3 text-red-600">
              Медицинская страховка (Health Insurance)
            </h2>
            <p>
              В США медицинская страховка является необходимостью. Без неё
              лечение может быть очень дорогим. Для граждан и резидентов
              доступны государственные и частные программы:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <b>Medicaid</b> — бесплатная страховка для людей с низким
                доходом.
              </li>
              <li>
                <b>Marketplace Insurance</b> — доступна на сайте{" "}
                <a
                  href="https://www.healthcare.gov"
                  className="text-blue-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  healthcare.gov
                </a>
              </li>
              <li>
                <b>Emergency Medicaid</b> — для неиммигрантов и ожидающих
                статуса (например, asylum seekers) при экстренных случаях.
              </li>
            </ul>
            <p>
              В крупных городах существуют <b>Community Health Centers</b>, где
              предоставляют услуги по сниженной цене независимо от статуса.
            </p>
          </>
        )}

        {activeTab === "housing" && (
          <>
            <h2 className="text-2xl font-semibold mb-3 text-red-600">
              Жильё и работа
            </h2>
            <p>
              Здесь скоро появится список ресурсов по поиску жилья, аренде и
              вакансиям в разных городах США. Мы будем обновлять этот раздел для
              помощи кыргызстанцам, проживающим в Америке.
            </p>
            <p>
              Временно вы можете пользоваться сайтами:{" "}
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
              и{" "}
              <a
                href="https://www.indeed.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Indeed
              </a>{" "}
              для поиска жилья и работы.
            </p>
          </>
        )}

        {activeTab === "support" && (
          <>
            <h2 className="text-2xl font-semibold mb-3 text-red-600">
              Поддержка и вопросы
            </h2>
            <p>
              Если у вас есть вопросы к консулу или предложения для сообщества,
              вы можете оставить их ниже. Мы постараемся передать их
              представителям консульства и активистам кыргызской диаспоры.
            </p>
            <form className="mt-5 bg-gray-50 p-5 rounded-lg shadow-md">
              <textarea
                placeholder="Ваш вопрос или предложение..."
                className="w-full p-3 border rounded-lg mb-3"
                rows={4}
              />
              <button
                type="submit"
                className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition"
              >
                Отправить
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;
