import { ContainerMain } from "../components/ContainerMain";
import { Container } from "../components/Container";
import { contacts } from '../constans/contacts';

import { ContactForm } from "../components/ContactForm";

export const ContactPage = () => {
  return (
    <ContainerMain className="relative overflow-hidden">
      <div className="absolute size-20 md:size-40 golubika-image-png top-12 -left-[5.6rem] rotate-90"></div>
      <div className="absolute size-20 md:size-40 golubika-image-png -bottom-5 right-0 "></div>

      <Container className="relative z-5">
        <div>
          <div className="grid max-w-5xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="h2-text-span">Контакты</h1>
              <p className="pt-2 pb-4 ">Сезон ягод июнь - август</p>
              <ul className="space-y-4">
                {contacts &&
                  contacts.map((contact) => (
                    <li
                      key={contact.title}
                      className="flex items-center space-x-2 sm:space-x-6"
                    >
                      <contact.icon
                        className={`fill-primary flex-none ${contact.iconSize}`}
                      />
                      <a
                        href={contact.href}
                        className="hover:text-primary/80 transition-colors"
                      >
                        {contact.info}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
        {/* google-map */}
        <div className="pt-12 max-w-2xl h-80 mx-auto rounded-xl">
          <iframe
            title="address in google map"
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d376.02792085943156!2d27.299086215759736!3d54.12691967176806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e3!4m0!4m3!3m2!1d54.126873663995056!2d27.29939336404507!5e0!3m2!1sru!2spl!4v1732719930389!5m2!1sru!2spl"
            className="w-full h-full mx-auto rounded-xl"
            allow="fullscreen"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </ContainerMain>
  );
};
