import { Container } from "../../components/Container";
import FlyoutMenu from "../FlyoutMenu";

export const Header = () => {
  return (
    <header className="bg-primary py-4">
      <Container>
        <FlyoutMenu />
      </Container>
    </header>
  );
};
