import { Link } from "react-router-dom";

import { Container } from "../components/Container/index";
import { ContainerMain } from "../components/ContainerMain";
import { BgFixedSection } from "../components/sections/BgFixedSection";
import { BgImgSection } from "../components/sections/BgImgSection";
// import { BannerSection } from "../components/sections/BannerSection";

import { MarkCloseFillIcon, PointIcon } from "../components/Icons";
import {
  bg_main_sreen_golubika_IMG,
  golubika4_1_PNG,
  golubika_kids_hand_IMG,
} from "../components/Images";
import { inNumbersFacts, intrestingFacts } from "../constans/facts";
import ButtonLink from "../components/ButtonLink";
import { testimonials } from "../constans/testimonials";
import { contacts } from "../constans/contacts";

const address = contacts[0];

export const HomePage = () => {
  return (
    <ContainerMain className="py-0 sm:py-0 lg:py-0">
      {/* <section className="h-[80vh] bg-cover bg-no-repeat bg-left-top bg-[url('./assets/images/joanna-kosinska-4qujjbj3srs-unsplash_1920-1282.jpg')]">
        <Container className="py-20 sm:px-32">
          <h1 className="text-gray-600 font-semibold max-w-md text-left text-6xl">
            Cвежая&nbsp;<span className="text-primary">голубика</span>{" "}
            в&nbsp;Минском районе в семейном хозяйстве
          </h1>
        </Container>
      </section> */}
      <section
        id="main-screen"
        className="h-[calc(100vh-72px)] relative overflow-hidden flex items-center"
      >
        <div className="absolute -z-10 -right-[80%] md:-right-2/3 lg:-right-1/2 xl:-right-1/3 2xl:right-0 2xl:left-0 top-0">
          <img src={bg_main_sreen_golubika_IMG} alt="ягоды голубики" />
        </div>
        {/* py-20 sm:px-32 */}
        <Container>
          <div className="mb-20 xl:mb-[8rem] 2xl:mb-[20rem]">
            <h1 className="font-medium max-w-md text-left text-2xl md:text-3xl lg:text-4xl mb-4 relative leading-relaxed">
              <span className="2xl:hidden">Cвежая&nbsp;</span>
              <span className="h2-text-span text-primary font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase relative">
                голубика
                {/* <UnderlineIcon className="absolute -left-2 -bottom-5 w-[14rem] fill-green-300" /> */}
              </span>
              <br />
              <span>в&nbsp;Минском районе</span>
            </h1>
            <ButtonLink color="green" size="xl" href="/contact">
              Где купить
            </ButtonLink>
          </div>
        </Container>
      </section>
      {/* about-section */}
      <BgImgSection bgOverlayColorClassName="bg-accent/85">
        <Container className="max-w-md md:max-w-3xl">
          <h2>О нас</h2>
          <p className="text-primary">
            <span className="text-primary font-semibold text-xl md:text-2xl ">
              SuperGolubika
            </span>{" "}
            - это небольшое семейное хозяйство по выращиванию ягод голубики. Мы
            начинали с нескольких кустиков для себя и наших детей. Мы решили
            применить все накопленные знания и расширить наши грядки и теперь
            делимся излишками ягод со всеми любителями голубики
          </p>
          <p className="text-primary">
            Кусты голубики растут у нас на участке{" "}
            <Link
              to="/contact"
              className="text-primary font-semibold hover:text-primary/80"
            >
              в Беларуси, в Минской области, направление Радашковичи, д.Рогово
            </Link>
            . Здесь вы сможете купить свежую голубику летом.
          </p>
        </Container>
      </BgImgSection>
      <section id="why-section" className="py-12 sm:py-20 xl:py-28">
        <Container>
          <h2 className="max-w-xl mx-auto">
            Почему именно наша <span className="h2-text-span">голубика</span>?
          </h2>
          <div className="flex flex-col gap-10 lg:flex-row pt-4 md:pt-8 lg:pt-12 items-center">
            <div className="lg:basis-1/2 xl:basis-3/5 bg-gray-100">
              <div className="flex items-center justify-center">
                <img
                  src={golubika_kids_hand_IMG}
                  alt="рука ребенка с голубикой"
                  className="rounded-xl shadow-lg aspect-video sm:min-h-96 object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-6 lg:basis-1/2">
              <div className="flex space-x-2 sm:space-x-4">
                <PointIcon className="flex-shrink-0 size-6 fill-accent-green stroke-primary" />
                <div className="space-y-2">
                  <h3 className="text-lg leading-snug">Натуральный вкус</h3>
                  <p className="leading-snug">
                    Без химии и пестицидов — только солнце, вода и забота!
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <PointIcon className="flex-shrink-0 size-6 fill-accent-green stroke-primary" />
                <div className="space-y-2">
                  <h3 className="text-lg leading-snug">Собранная вручную</h3>
                  <p className="leading-snug">
                    Каждая ягода собрана с любовью, как для себя!
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <PointIcon className="flex-shrink-0 size-6 fill-accent-green stroke-primary" />
                <div className="space-y-2">
                  <h3 className="text-lg leading-snug">Полезные свойства</h3>
                  <p className="leading-snug">
                    Богатая витаминами и антиоксидантами, голубика укрепляет
                    иммунитет и дарит здоровье!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section
        id="inNumbersFacts-section"
        className="py-12 sm:py-20 lg:py-28 bg-primary"
      >
        <Container>
          <ul className="flex flex-col sm:flex-row mx-auto justify-center gap-6 lg:gap-10 xl:gap-16 max-w-3xl xl:max-w-4xl">
            {inNumbersFacts &&
              inNumbersFacts.map((fact) => (
                <li
                  key={fact.id}
                  className="flex gap-x-2 lg:gap-x-4 items-center justify-center text-accent-green"
                >
                  {fact.icon && (
                    <fact.icon
                      className="fill-accent-green size-12 md:size-16 lg:size-20"
                      aria-hidden="true"
                    />
                  )}
                  <div className="max-w-[120px] md:max-w-[140px]">
                    <h4
                      rel="noopener noreferrer"
                      title={fact.title}
                      className="font-bold text-accent text-xl lg:text-2xl"
                    >
                      {fact.title}
                    </h4>
                    <p className="mt-0 text-xs text-accent">{fact.text}</p>
                  </div>
                </li>
              ))}
          </ul>
        </Container>
      </section>
      <section id="facts-section" className="py-12 sm:py-20 xl:py-28">
        <Container>
          <div className="max-w-xl mx-auto space-y-2">
            <h2>
              Интересные факты о <span className="h2-text-span">голубике</span>
            </h2>
            <img
              src={golubika4_1_PNG}
              alt="ягоды голубики"
              className="size-24 sm:size-28 lg:size-32 mx-auto"
            />
          </div>
          <ul className="flex flex-wrap">
            {intrestingFacts &&
              intrestingFacts.map((fact) => (
                <li className="md:basis-1/2 lg:basis-1/3 p-4" key={fact.id}>
                  <h3 className="my-2 text-lg md:text-lg">{fact.title}</h3>
                  <p className="text-sm">{fact.text}</p>
                </li>
              ))}
          </ul>
        </Container>
      </section>
      {/* <BannerSection /> */}
      <BgFixedSection />
      <section
        id="testimonial-section"
        className="py-12 sm:py-20 xl:py-28 bg-primary"
      >
        <Container>
          <h2 className="text-accent">
            Что говорят покупатели о нашей{" "}
            <span className="h2-text-span">голубике</span>
          </h2>
          <ul className="pt-4 md:pt-8 lg:pt-12 lg:max-w-5xl mx-auto grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-3 ">
            {testimonials &&
              testimonials.map((testimonial) => (
                <li
                  key={testimonial.id}
                  className="flex flex-col items-center mx-12 lg:mx-0"
                >
                  <div className="relative text-center">
                    <MarkCloseFillIcon className="size-6 lg:size-8 fill-accent absolute top-0 left-0 rotate-180" />
                    <p className="text-gray-100 md:text-lg italic mt-0 px-8 py-4 ">
                      {testimonial.text}
                    </p>
                    <MarkCloseFillIcon className="size-6 lg:size-8 fill-accent absolute bottom-0 right-0" />
                  </div>
                  <span className="w-12 h-0.5 my-1 rounded-lg bg-accent-green"></span>
                  <p className="text-gray-100/50">
                    <span className="text-accent">{testimonial.author}</span>,
                    покупатель
                  </p>
                </li>
              ))}
          </ul>
        </Container>
      </section>
      <section
        id="address-section"
        className="py-12 sm:py-20 relative bg-contain bg-center bg-no-repeat"
      >
        <Container>
          <h3 className="text-center">Ждем вас летом за свежей голубикой!</h3>
          <div className="flex max-w-xl mx-auto">
            <div className="basis-1/4">
              <img
                src={golubika4_1_PNG}
                alt="golubika"
                className="size-24 object-cover mx-auto"
              />
            </div>
            {address && (
              <div className="basis-3/4 flex items-center space-x-2 sm:space-x-6">
                <address.icon
                  className={`fill-primary flex-none ${address.iconSize}`}
                />
                <a
                  href={address.href}
                  className="hover:text-primary/80 transition-colors"
                >
                  {address.info}
                </a>
              </div>
            )}
          </div>
        </Container>
      </section>
    </ContainerMain>
  );
};
