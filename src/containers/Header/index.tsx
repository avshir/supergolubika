import { Container } from "../../components/Container";
import { Logo } from "../../components/Logo";
import { Navigation } from "../../components/Navigation";

export const Header = () => {
  return (
    <div className="bg-primary py-4">
      <Container className="flex justify-between items-center">
        <Logo />
        <Navigation />
      </Container>
    </div>
  );
};
