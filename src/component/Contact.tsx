/* src/components/Contact.tsx */

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'sonner';
import clsx from 'clsx';
import { IMaskInput } from 'react-imask';
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface FormValues {
  name: string;
  phone: string;
  message: string;
}

const schema = yup.object({
  name: yup.string().required('Введите имя'),
  phone: yup
    .string()
    .required('Введите телефон')
    .matches(/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, 'Неверный формат'),
  message: yup.string().required('Введите сообщение')
});

const FieldLabel = ({ children }: { children: string }) => (
  <label className="mb-2 block text-sm font-semibold tracking-wide text-gray-600">{children}</label>
);

const Contact = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await new Promise((r) => setTimeout(r, 800)); // mock‑delay
      toast.success('Сообщение отправлено!');
      reset();
    } catch {
      toast.error('Ошибка отправки');
    }
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center bg-[#f6f4f0] px-4 py-20"
    >
      {/* карточка */}
      <div className="grid w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-xl sm:grid-cols-2">
        {/* левая колонка — контакты + падающие звёзды */}
        <div className="relative flex flex-col gap-12 bg-dark px-10 py-14 text-white sm:px-12">
          {/* анимированные звёзды */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {Array.from({ length: 25 }, (_, i) => {
              const delay = Math.random() * 6; // 0‑6 s
              const duration = 5 + Math.random() * 4; // 5‑9 s
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
                    animationDuration: `${duration}s`
                  }}
                />
              );
            })}
          </div>

          <div className="relative space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Телефон</p>
            <p className="text-3xl font-bold">8&nbsp;800 500 00 00</p>
            <a href="tel:88005000000" className="underline underline-offset-4">
              Позвонить сейчас
            </a>
          </div>

          <hr className="relative border-white/10" />

          <div className="relative space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Адрес</p>
            <p className="text-2xl font-semibold leading-snug">Норильск, Ленинский проспект, 31к2</p>
            <a
              href="https://yandex.ru/maps/-/CHvEFZZZ"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Открыть карту
            </a>
          </div>

          <hr className="relative border-white/10" />

          <div className="relative space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">E‑mail</p>
            <p className="text-2xl font-semibold">contact@MyCompany.com</p>
            <a href="mailto:contact@MyCompany.com" className="underline underline-offset-4">
              Написать
            </a>
          </div>
        </div>

        {/* правая колонка — форма */}
        <div className="px-8 py-14 sm:px-12">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Имя */}
            <div>
              <FieldLabel>Имя</FieldLabel>
              <input
                {...register('name')}
                className={clsx(
                  'w-full rounded-full border px-6 py-3 text-sm outline-none',
                  errors.name ? 'border-red-500' : 'border-gray-300 focus:border-dark'
                )}
                placeholder="Введите ваше имя"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>

            {/* Телефон */}
            <div>
              <FieldLabel>Телефон</FieldLabel>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: true,
                  validate: (v) =>
                    /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/.test(v) || 'Неверный формат'
                }}
                render={({ field, fieldState }) => (
                  <IMaskInput
                    {...field}
                    mask="+{7} (000) 000-00-00"
                    overwrite
                    inputRef={field.ref}
                    className={clsx(
                      'w-full rounded-full border px-6 py-3 text-sm outline-none',
                      fieldState.error ? 'border-red-500' : 'border-gray-300 focus:border-dark'
                    )}
                    placeholder="Введите ваш телефон"
                  />
                )}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>

            {/* Сообщение */}
            <div>
              <FieldLabel>Сообщение</FieldLabel>
              <textarea
                rows={4}
                {...register('message')}
                className={clsx(
                  'w-full resize-none rounded-2xl border px-6 py-3 text-sm outline-none',
                  errors.message ? 'border-red-500' : 'border-gray-300 focus:border-dark'
                )}
                placeholder="Введите ваше сообщение"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            {/* Кнопка */}
            <button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full rounded-full bg-dark px-6 py-4 text-sm font-semibold uppercase tracking-wide text-white transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? 'Отправка…' : 'Отправить сообщение'}
            </button>

            {/* Подпись */}
            <p className="flex items-start gap-2 text-xs text-gray-500">
              <AiOutlineInfoCircle size={16} className="mt-[2px]" />
              Нажимая на кнопку, вы выражаете согласие с политикой конфиденциальности и правилами
              обработки персональных данных
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
