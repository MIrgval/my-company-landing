import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import clsx from "clsx";
import { IMaskInput } from "react-imask";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface FormValues {
  name: string;
  phone: string;
  message: string;
}

const schema = yup.object({
  name: yup.string().required("Введите имя"),
  phone: yup
    .string()
    .required("Введите телефон")
    .matches(/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, "Неверный формат"),
  message: yup.string().required("Введите сообщение"),
});

const cityData = {
  Норильск: {
    phone: "8 800 500 00 00",
    address: "Норильск, Ленинский проспект, 31к2",
    email: "contact@MyCompany.com",
    map: "https://yandex.ru/maps/-/CHvEFZZZ",
  },
  Красноярск: {
    phone: "8 800 600 11 11",
    address: "Красноярск, ул. Карла Маркса, 15",
    email: "kras@MyCompany.com",
    map: "https://yandex.ru/maps/-/CDb6LEvN",
  },
};

const FieldLabel = ({ children }: { children: string }) => (
  <label className="mb-2 block text-sm font-semibold tracking-wide text-gray-600">
    {children}
  </label>
);

const Contact = () => {
  const [selectedCity, setSelectedCity] = useState<keyof typeof cityData>("Норильск");

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async () => {
    try {
      await new Promise((r) => setTimeout(r, 800));
      toast.success("Сообщение отправлено!");
      reset();
    } catch {
      toast.error("Ошибка отправки");
    }
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center bg-[#f6f4f0] px-4 py-20"
    >
      {/* Кнопки выбора города */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        {Object.keys(cityData).map((city) => (
          <button
            key={city}
            onClick={() => setSelectedCity(city as keyof typeof cityData)}
            className={`w-64 rounded-full border px-6 py-3 text-lg font-semibold transition ${
              selectedCity === city ? "bg-black text-white" : "bg-white hover:bg-gray-100"
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Карточка */}
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-xl sm:grid-cols-2">
        {/* Левая колонка */}
        <div className="relative flex flex-col gap-12 bg-dark px-10 py-14 text-white sm:px-12">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {Array.from({ length: 25 }, (_, i) => {
              const delay = Math.random() * 6;
              const duration = 5 + Math.random() * 4;
              const left = Math.random() * 100;
              const top = Math.random() * 100;
              return (
                <span
                  key={i}
                  className="star"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                  }}
                />
              );
            })}
          </div>

          <div className="relative space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Телефон
            </p>
            <p className="text-3xl font-bold">{cityData[selectedCity].phone}</p>
            <a href="tel:88005000000" className="underline underline-offset-4">
              Позвонить сейчас
            </a>
          </div>

          <hr className="relative border-white/10" />

          <div className="relative space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Адрес
            </p>
            <p className="text-2xl font-semibold leading-snug">
              {cityData[selectedCity].address}
            </p>
            <a
              href={cityData[selectedCity].map}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Открыть карту
            </a>
          </div>

          <hr className="relative border-white/10" />

          <div className="relative space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              E‑mail
            </p>
            <p className="text-2xl font-semibold">{cityData[selectedCity].email}</p>
            <a
              href={`mailto:${cityData[selectedCity].email}`}
              className="underline underline-offset-4"
            >
              Написать
            </a>
          </div>
        </div>

        {/* Правая колонка — форма */}
        <div className="px-8 py-14 sm:px-12">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <FieldLabel>Имя</FieldLabel>
              <input
                {...register("name")}
                className={clsx(
                  "w-full rounded-full border px-6 py-3 text-sm outline-none",
                  errors.name ? "border-red-500" : "border-gray-300 focus:border-dark"
                )}
                placeholder="Введите ваше имя"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div>
              <FieldLabel>Телефон</FieldLabel>
              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                  <IMaskInput
                    {...field}
                    mask="+{7} (000) 000-00-00"
                    overwrite
                    inputRef={field.ref}
                    className={clsx(
                      "w-full rounded-full border px-6 py-3 text-sm outline-none",
                      fieldState.error
                        ? "border-red-500"
                        : "border-gray-300 focus:border-dark"
                    )}
                    placeholder="Введите ваш телефон"
                  />
                )}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <FieldLabel>Сообщение</FieldLabel>
              <textarea
                rows={4}
                {...register("message")}
                className={clsx(
                  "w-full resize-none rounded-2xl border px-6 py-3 text-sm outline-none",
                  errors.message ? "border-red-500" : "border-gray-300 focus:border-dark"
                )}
                placeholder="Введите ваше сообщение"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full rounded-full bg-dark px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Отправка…" : "Отправить сообщение"}
            </button>

            <p className="flex items-start gap-2 text-xs text-gray-500">
              <AiOutlineInfoCircle size={16} className="mt-[2px]" />
              Нажимая на кнопку, вы выражаете согласие с политикой конфиденциальности и
              правилами обработки персональных данных
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
