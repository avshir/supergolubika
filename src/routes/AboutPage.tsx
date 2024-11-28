import { Link } from "react-router-dom";

import { ContainerMain } from "../components/ContainerMain";
import { Container } from "../components/Container";
// import { img_blueberry_leaves_1 } from "../components/Images";

export const AboutPage = () => {
  return (
    <ContainerMain className="relative overflow-hidden">
      <div className="absolute size-20 md:size-40 golubika-image-png top-12 -left-[5.6rem] rotate-90"></div>
      <div className="absolute size-20 md:size-40 golubika-image-png -bottom-5 right-0 "></div>
      {/* <div
        className={`absolute size-40 -left-16 rotate-180 -bottom-10 ${img_blueberry_leaves_1} bg-contain`}
      ></div> */}
      {/* <div className="absolute size-40 golubika-image-png -top-5 -left-1 rotate-180"></div> */}
      <Container className="relative z-5 max-w-md md:max-w-3xl">
        <h1>
          <span className="h2-text-span">О нас</span>
        </h1>
        <div>
          <p>
            <span className="text-xl text-primary font-semibold md:text-2xl ">
              SuperGolubika
            </span>{" "}
            - это небольшое семейное хозяйство по выращиванию ягод голубики. Мы
            начинали с нескольких кустиков полакомится, но нас это так увлекло,
            что мы решили применить все накопленные знания и расширить наш
            сад-огород, и теперь делимся излишками с вами, наши дорогие
            покупатели.
          </p>
          <p>
            Мы растим все ягоды как для себя, кушаем сами и даем их нашим детям,
            самым строгим критикам! Поэтому мы продаем не просто голубику, а
            домашнюю голубику.
          </p>
          <p>
            Кусты голубики растут на участке{" "}
            <Link
              to="/contact"
              className="text-primary font-semibold hover:text-primary/80"
            >
              в Беларуси, Минской области, направление Радашковичи, в д.Рогово
            </Link>
            . Здесь вы сможете купить свежую голубику летом.
          </p>
          <p>
            Сезон ягод голубики идет с середины июня по конец августа. О датах
            начала и окончания сезона следите в наших социцальных сетях.
          </p>
          <p>
            Ждем вас в гости за голубикой{" "}
            <span className="text-red-600">&#x2764;</span> !
          </p>
        </div>
      </Container>
    </ContainerMain>
  );
};
