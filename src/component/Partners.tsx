import React from "react";

const partners = [
  { name: "Компания 1", logo: "./assets/NK.png" },
  { name: "Компания 2", logo: "./assets/logo2.svg" },
  { name: "Компания 3", logo: "./assets/logo.svg" },
  { name: "Компания 4", logo: "./assets/react.svg" },
];

const Partners = () => {
  return (
    <section className="py-16 bg-[rgb(246,244,240)] text-center">
      <h2 className="text-3xl font-semibold mb-10">Работали с</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center px-4">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-48 h-48 object-contain mb-2"
            />
            {/* Можно добавить подпись под логотипом, если нужно:
            <p className="text-sm text-gray-700">{partner.name}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
