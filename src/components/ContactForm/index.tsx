// For sending mail you can use nodemailer or EmailJS, web3forms
//https://www.youtube.com/watch?v=94_6JPDi13g

//web3forms.com/platforms/react-contact-form
//docs.web3forms.com/how-to-guides/js-frameworks/react-js/react-plugin
// av.shirinskaya@gmail.com

import { FormEvent } from "react";
import Button from "../Button";

// Public Access Key is:
const accessKey = "ab2675fb-ad1f-4bf6-93d9-bf1ff1ed08af";

export const ContactForm = () => {
  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      noValidate={true}
      className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
    >
      <label className="block">
        <span className="mb-1">Имя и Фамилия</span>
        <input
          type="text"
          name="name"
          placeholder="Ivan Ivanov"
          className="block w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-75 focus:ring-primary bg-white"
        />
      </label>
      <label className="block">
        <span className="mb-1">Email</span>
        <input
          type="email"
          name="email"
          placeholder="ivan@gmail.com"
          className="block w-full rounded-xl shadow-sm focus:ring focus:ring-opacity-75 focus:ring-primary bg-white"
        />
      </label>
      <label className="block">
        <span className="mb-1">Сообщение</span>
        <textarea
          name="message"
          rows={3}
          className="block w-full rounded-xl focus:ring focus:ring-opacity-75 focus:ring-primary bg-white"
        ></textarea>
      </label>
      <Button size="lg" type="submit" color="accent" className="self-center">
        Отправить
      </Button>
    </form>
  );
};
