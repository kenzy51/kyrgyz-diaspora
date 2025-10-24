import { Select } from "antd";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('18nextLng', lng)
  };
  const currentLang = i18n.language.split("-")[0];
  return (
    <Select
      value={currentLang}
      onChange={(value) => changeLang(value)}
      className="border rounded px-2 py-1 text-gray-700"
      style={{ width: 60 }}
    >
      <Select.Option value="en">
        <ReactCountryFlag
          countryCode="US"
          svg
          style={{ width: "24px", height: "24px" }}
        />
      </Select.Option>
      <Select.Option value="ru">
        <ReactCountryFlag
          countryCode="RU"
          svg
          style={{ width: "24px", height: "24px" }}
        />
      </Select.Option>
      <Select.Option value="kg">
        <ReactCountryFlag
          countryCode="KG"
          svg
          style={{ width: "24px", height: "24px" }}
        />
      </Select.Option>
    </Select>
  );
};

export default LanguageSelector;
