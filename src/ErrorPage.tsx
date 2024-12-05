
import ButtonLink from "./components/ButtonLink";
import { Container } from "./components/Container";
import { ContainerMain } from "./components/ContainerMain";

export const ErrorPage = () => {
  return (
    <ContainerMain className="flex items-center bg-primary">
      <Container>
        <div className="max-w-md mx-auto text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-accent">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold  text-gray-100 md:text-3xl">
            Извините, мы не можем найти эту страницу
          </p>
          <p className="mt-4 mb-8 text-accent">
            Но не волнуйтесь, вы можете найти много полезного на нашей главной
            странице
          </p>
          <ButtonLink href="/" size="xl" color="green">
            Назад на главную
          </ButtonLink>
        </div>
      </Container>
    </ContainerMain>
  );
};
