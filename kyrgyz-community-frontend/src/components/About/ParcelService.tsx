import { Collapse } from "antd";
import { PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

export default function ParcelService() {
  return (
    <Collapse
      accordion
      expandIconPosition="end"
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
      bordered={false}
    >
      <Panel
        header={
          <div className="flex items-center text-lg md:text-xl font-semibold text-red-700">
            <span className="mr-3 text-2xl">📦</span> Parcel Delivery Services
          </div>
        }
        key="parcel"
        className="text-gray-700 text-lg leading-relaxed p-4 md:p-6 space-y-6"
      >
        <div className="space-y-3">
          <p>
            <strong className="text-red-700">Кыргызстан:</strong> $10.50 / 1 кг —
            доставка 5–7 дней со дня отправки.
          </p>
          <p>
            <strong className="text-red-700">Казахстан:</strong> $11 / 1 кг —
            доставка 5–7 дней со дня отправки.
          </p>
          <p>
            <strong className="text-red-700">Туркменистан:</strong> $16 / 1 кг —
            отправка каждые 2 недели.
          </p>
        </div>

        <div className="bg-red-50 rounded-xl p-4">
          <p className="font-semibold text-red-700">📅 Прием посылок:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Суббота: 9:00 – 13:00</li>
            <li>Воскресенье: 15:00 – 18:00</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2 text-red-700">⚠️ Важно:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Приносите готовые посылки с описанием товаров.</li>
            <li>Укажите имя, фамилию, номер отправителя и получателя.</li>
            <li>
              Электроника (телефоны, компьютеры, смарт-часы, наушники) должна
              быть отмечена.
            </li>
          </ul>
        </div>

        {/* Electronics Pricing */}
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="font-semibold text-red-700">💻 Техника:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Телефон (б/у): $12 / шт</li>
            <li>Телефон (новый): $12 / шт + 15% растаможка от суммы свыше $1000</li>
            <li>Компьютер: $12 / кг</li>
          </ul>
        </div>

        {/* Contacts */}
        <div className="space-y-2">
          <p>
            <PhoneOutlined className="text-red-600 mr-2" /> Раушан (посылочные
            дни): <strong>929-325-9094</strong>
          </p>
          <p>
            <PhoneOutlined className="text-red-600 mr-2" /> Айпери (все вопросы):
            <strong> 302-332-2979</strong>
          </p>
          <p>
            <EnvironmentOutlined className="text-red-600 mr-2" /> 1829 East 13th
            Street, Unit CB, Brooklyn, NY 11229
          </p>
        </div>
      </Panel>
    </Collapse>
  );
}
