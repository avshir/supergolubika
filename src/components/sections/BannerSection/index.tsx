import ButtonLink from "../../ButtonLink";
import { Container } from "../../Container";

export const BannerSection = () => {
  return (
    <section
      id="banner-section"
      className="py-10 bg-accent-green/80 absolute bottom-6 right-0 left-0"
    >
      <Container className="max-x-2xl">
        <div className="flex flex-col items-center justify-center space-x-6 space-y-2 lg:flex-row lg:space-y-0">
          <h2>Урожай голубики 2025 !</h2>
          <p className="font-medium text-lg text-gray-600">
            в продаже
            <span className="text-primary font-bold"> с 05.07.2025</span>
          </p>
          <ButtonLink size="xl" href="/contact" className="hidden">
            Подробнее
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
};
