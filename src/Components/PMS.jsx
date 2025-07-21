import { Link } from "react-router-dom";

import buySell from "../assets/buy&sell.png";
import legalDoc from "../assets/legal.png";
import management from "../assets/Management.png";
import titleClear from "../assets/title Clearing.png";
import taxSupport from "../assets/tax.png";
import support24x7 from "../assets/24 x 7.png";
const PMS = () => {
  const services = [
    {
      id: "buy-sell",
      img: buySell,
      alt: "Buy & Sell",
      title: "Buy & Sell Assistance",
      desc: "Get expert help for buying or selling property in India while living abroad.",
    },
    {
      id: "legal",
      img: legalDoc,
      alt: "Legal Documents",
      title: "Legal & Documentation",
      desc: "We manage all your paperwork, registration, and legal formalities seamlessly.",
    },
    {
      id: "management",
      img: management,
      alt: "Property Management",
      title: "Property Management",
      desc: "End-to-end management of your property in India, including maintenance, tenant coordination, regular inspections, and detailed updates.",
    },
    {
      id: "title-clearing",
      img: titleClear,
      alt: "Title Clearing",
      title: "Property Title Clearing",
      desc: "Assistance in verifying ownership, resolving disputes, and ensuring your property has a clear legal title.",
    },
    {
      id: "finance",
      img: taxSupport,
      alt: "Tax & Finance",
      title: "NRI Tax & Finance Support",
      desc: "We help you manage Indian taxes, TDS, and financial compliance with ease.",
    },
    {
      id: "support",
      img: support24x7,
      alt: "24x7 Support",
      title: "24x7 Support",
      desc: "Dedicated relationship managers available round-the-clock for all queries.",
    },
  ];

  return (
    <div className="!m-5">
      <h2 className="text-3xl font-bold !mb-8 text-center">
        NRI{" "}
        <span className="text-red-600 underline underline-offset-4">
          Property Management Services
        </span>
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item, idx) => (
          <Link
            to={`/ServiceDetails/${item.id}`}
            key={idx}
            className="relative bg-white !p-6 rounded-xl shadow-md hover:shadow-lg transition text-center flex flex-col items-center hover:no-underline"
          >


            {/* Service Icon */}
            <img
              src={item.img}
              alt={item.alt}
              className="!mx-auto !mb-4 w-20 md:w-24 h-auto transition-transform duration-300 hover:scale-110 mt-10"
            />

            {/* Title & Description */}
            <h3 className="text-xl font-semibold !mb-2 text-blue-700">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default PMS;
