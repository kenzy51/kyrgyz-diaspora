import { Select } from "antd";

const { Option } = Select;

type CityFilterProps = {
  cities: string[];
  selectedCity: string;
  onChange: (city: string) => void;
};

export default function CityFilter({ cities, selectedCity, onChange }: CityFilterProps) {
  return (
    <div className="mb-8 flex justify-center">
      <Select
        value={selectedCity}
        onChange={onChange}
        placeholder="Filter by City"
        className="w-64 shadow-md"
        allowClear
      >
        {cities.map((city) => (
          <Option key={city} value={city}>
            {city}
          </Option>
        ))}
      </Select>
    </div>
  );
}
