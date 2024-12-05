import { Container } from "../../components/Container";
import { Navigation } from "../../components/Navigation";

import { socials } from "../../constans/socials";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-gray-100 py-4 md:py-8">
      <Container className="gap-4 flex flex-col justify-center lg:flex-row lg:justify-between items-center">
        <div className="basis-1/3 text-accent-green order-last lg:order-first text-center lg:text-left">
          <span>
            © {new Date().getFullYear()}{" "}
            <span className="text-accent-green">super</span>
            <span className="text-accent">golubika</span>. All rights
            reserved | with&nbsp;<span className="text-red-600">&#x2764;</span>
            &nbsp;by&nbsp;
          </span>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/avshir"
            className="hover:text-accent"
          >
            avshir
          </a>
        </div>
        <Navigation />
        <ul className="flex basis-1/3 justify-center lg:justify-end space-x-4">
          {socials &&
            socials.map((social) => (
              <li key={social.title}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={social.href}
                  title={social.title}
                  className="flex items-center justify-center size-10 rounded-full bg-accent-green hover:bg-accent transition-colors"
                >
                  <social.icon className=" fill-primary" aria-hidden="true" />
                </a>
              </li>
            ))}
        </ul>
      </Container>
    </footer>
  );
};
