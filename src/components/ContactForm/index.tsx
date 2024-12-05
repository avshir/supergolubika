//docs.web3forms.com/how-to-guides/js-frameworks/react-js/react-js
import { useEffect, useState } from "react";
import { useForm, useWatch, SubmitHandler } from "react-hook-form";

import Button from "../Button";
import { LoaderIcon } from "../Icons";
import { Snackbar } from "../Snackbar";
import { EMAIL_ACCESS_KEY } from "../../constans/email_key";
import { NAME_WEBSITE } from "../../constans/contacts";

interface IFormValues {
  access_key: string;
  from_name: string;
  botcheck: string;
  subject: string;
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<IFormValues>({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const userName = useWatch({
    control,
    name: "name",
    defaultValue: "Someone",
  });

  useEffect(() => {
    setValue("subject", `${userName} sent a message from ${NAME_WEBSITE}`);
  }, [userName, setValue]);

  const onSubmit: SubmitHandler<IFormValues> = async (data, e) => {
    console.log(data);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data, null, 2),
      });

      const json = await response.json();
      if (json.success) {
        setIsSuccess(true);
        setMessage(json.message);
        e?.target.reset();
        reset();
      } else {
        setIsSuccess(false);
        setMessage(json.message);
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("Client Error. Please check the console.log for more info");
      console.log(error);
    }
  };

  return (
    <>
      {!isSubmitSuccessful && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
          <input
            type="hidden"
            value={EMAIL_ACCESS_KEY}
            {...register("access_key")}
          />
          <input type="hidden" {...register("subject")} />
          <input
            type="hidden"
            value="Mission Control"
            {...register("from_name")}
          />
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}
          ></input>

          <div className="block space-y-1">
            <label htmlFor="name">Имя и Фамилия *</label>
            <input
              id="name"
              type="text"
              placeholder="Василий Иванов"
              autoComplete="false"
              className={`block bg-white w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-100 focus:ring-primary ${
                errors.name
                  ? "border-red-600 focus:ring-red-600 ring-red-100"
                  : "border-gray-300 focus:ring-primary ring-primary"
              }`}
              {...register("name", {
                required: "Введите Имя и Фамилию",
                minLength: { value: 3, message: "Введите не менее 3 символов" },
                maxLength: {
                  value: 80,
                  message: "Введите не более 80 символов",
                },
              })}
            />
            {errors.name && (
              <div className="mt-1 text-red-600">
                <small>{errors.name.message}</small>
              </div>
            )}
          </div>

          <div className="block space-y-1">
            <label htmlFor="email_address">Email *</label>
            <input
              id="email_address"
              type="email"
              placeholder="ivanov@gmail.com"
              autoComplete="false"
              className={`block bg-white w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-100 focus:ring-primary ${
                errors.name
                  ? "border-red-600 focus:ring-red-600 ring-red-100"
                  : "border-gray-300 focus:ring-primary ring-primary"
              }`}
              {...register("email", {
                required: "Введите свой email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Пожалуйста, введите корректный email",
                },
              })}
            />
            {errors.email && (
              <div className="mt-1 text-red-600">
                <small>{errors.email.message}</small>
              </div>
            )}
          </div>

          <div className="block space-y-1">
            <label htmlFor="message">Сообщение *</label>
            <textarea
              id="message"
              rows={3}
              placeholder="Ваше сообещение"
              className={`block bg-white w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-100 focus:ring-primary ${
                errors.name
                  ? "border-red-600 focus:ring-red-600 ring-red-100"
                  : "border-gray-300 focus:ring-primary ring-primary"
              }`}
              {...register("message", {
                required: "Введите ваше сообщение",
                minLength: {
                  value: 15,
                  message: "Введите не менее 15 символов",
                },
                maxLength: {
                  value: 300,
                  message: "Введите не более 300 символов",
                },
              })}
            />
            {errors.message && (
              <div className="mt-1 text-red-600">
                {" "}
                <small>{errors.message.message}</small>
              </div>
            )}
            <div className="text-sm">* поля обязательные для ввода</div>
          </div>

          <Button
            size="lg"
            type="submit"
            color="accent"
            className="self-center w-full rounded-xl"
          >
            {isSubmitting ? (
              <LoaderIcon className="size-5 mx-auto animate-spin" />
            ) : (
              "Отправить"
            )}
          </Button>
        </form>
      )}
      {isSubmitSuccessful && isSuccess && (
        <div className="flex items-center justify-center">
          <Snackbar title="Успешно" text="Сообщение успешно отправлено!">
            <Button
              size="md"
              color="accent"
              className="mt-4 self-start rounded-xl"
              onClick={() => reset()}
            >
              Вернуться обратно
            </Button>
          </Snackbar>
        </div>
      )}

      {isSubmitSuccessful && !isSuccess && (
        <div className="flex items-center justify-center">
          <Snackbar
            title="Упс, что-то пошло не так!"
            text={Message}
            isError={!isSuccess}
          >
            <Button
              size="md"
              color="accent"
              className="mt-4 self-start rounded-xl"
              onClick={() => reset()}
            >
              Попробуй заново
            </Button>
          </Snackbar>
        </div>
      )}
    </>
  );
};
