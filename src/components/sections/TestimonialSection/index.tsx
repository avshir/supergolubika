import { Container } from "../../Container";
import { MarkCloseFillIcon, UnderlineIcon } from "../../Icons";
import { testimonials } from "../../../constans/testimonials";

export const TestimonialSection = () => {
  return (
    <section
      id="testimonial-section"
      className="py-12 sm:py-20 xl:py-28 bg-primary"
    >
      <Container>
        <h2 className="text-accent">
          Что говорят покупатели о нашей{" "}
          <span className="relative">
            голубике{" "}
            <UnderlineIcon className="absolute left-0 -bottom-5 w-full fill-accent-green" />
          </span>
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
  );
};
