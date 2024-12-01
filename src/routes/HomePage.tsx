import { Link } from "react-router-dom";

import { inNumbersFacts, intrestingFacts } from "../constans/facts";
import { contacts } from "../constans/contacts";

import { Container } from "../components/Container/index";
import { ContainerMain } from "../components/ContainerMain";
import ButtonLink from "../components/ButtonLink";

import { BgFixedSection } from "../components/sections/BgFixedSection";
import { BgImgSection } from "../components/sections/BgImgSection";
import { TestimonialSection } from "../components/sections/TestimonialSection";
import { WhySection } from "../components/sections/WhySection";
// import { BannerSection } from "../components/sections/BannerSection";

import {
  bg_main_sreen_golubika_IMG,
  golubika4_1_PNG,
} from "../components/Images";

const address = contacts[0];

export const HomePage = () => {
  return (
    <ContainerMain className="py-0 sm:py-0 lg:py-0">
      {/* main-screen-section */}
      <section
        id="main-screen"
        className="h-[calc(100vh-72px)] relative overflow-hidden flex items-start pt-16 sm:pt-0 sm:items-center bg-[#E5EAF0]"
      >
        <div className="absolute bottom-0 -right-[30%] -left-[30%] sm:top-0 sm:-right-1/2 md:-right-1/3 lg:-right-1/4 2xl:inset-0">
          <img src={bg_main_sreen_golubika_IMG} alt="ягоды голубики" />
        </div>
        <Container className="relative w-auto sm:w-full">
          <div className="max-w-md mb-20 xl:mb-[8rem] 2xl:mb-[20rem]">
            <h1 className="font-medium text-center sm:text-left text-2xl md:text-3xl lg:text-4xl mb-4 relative leading-relaxed">
              <span className="max-sm:hidden xl:hidden">Cвежая&nbsp;</span>
              <span className="h2-text-span text-primary font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase relative">
                голубика
              </span>
              <br />
              <span>в&nbsp;Минском районе</span>
            </h1>
            <div className="flex justify-center sm:justify-start">
              <ButtonLink color="green" size="xl" href="/contact">
                Где купить
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      {/* about-section */}
      <BgImgSection bgOverlayColorClassName="bg-accent/85">
        <Container className="max-w-md md:max-w-3xl">
          <h2>О нас </h2>
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
      <WhySection />
      {/* inNumbersFacts-section */}
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
      {/* facts-section */}
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
      <TestimonialSection />
      {/* address-section */}
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
