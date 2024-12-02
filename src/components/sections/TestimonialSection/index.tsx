import { forwardRef } from "react";
import { motion } from "motion/react";

import { Container } from "../../Container";
import { MarkCloseFillIcon, UnderlineIcon } from "../../Icons";
import { ITestimonial, testimonials } from "../../../constans/testimonials";
import {
  listAnimation,
  textAnimation,
} from "../../../utils/animationVariantsMotion";

interface TestimonialItemProps {
  item: ITestimonial;
}

const TestimonialItem = forwardRef<HTMLLIElement, TestimonialItemProps>(
  ({ item }, ref) => {
    return (
      <li ref={ref} className="flex flex-col items-center mx-12 lg:mx-0">
        <div className="relative text-center">
          <MarkCloseFillIcon className="size-6 lg:size-8 fill-accent absolute top-0 left-0 rotate-180" />
          <p className="text-gray-100 md:text-lg italic mt-0 px-8 py-4 ">
            {item.text}
          </p>
          <MarkCloseFillIcon className="size-6 lg:size-8 fill-accent absolute bottom-0 right-0" />
        </div>
        <span className="w-12 h-0.5 my-1 rounded-lg bg-accent-green"></span>
        <p className="text-gray-100/50">
          <span className="text-accent">{item.author}</span>, покупатель
        </p>
      </li>
    );
  }
);

const MTestimonialtem = motion(TestimonialItem);

export const TestimonialSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4, once: true }}
      id="testimonial-section"
      className="py-12 sm:py-20 xl:py-28 bg-primary"
    >
      <Container>
        <motion.h2 className="text-accent" variants={textAnimation}>
          Что говорят покупатели о нашей{" "}
          <span className="relative">
            голубике{" "}
            <UnderlineIcon className="absolute left-0 -bottom-5 w-full fill-accent-green" />
          </span>
        </motion.h2>
        <ul className="pt-4 md:pt-8 lg:pt-12 lg:max-w-5xl mx-auto grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-3 ">
          {testimonials &&
            testimonials.map((item, index) => (
              <MTestimonialtem
                key={item.id}
                item={item}
                variants={listAnimation}
                custom={index + 2}
              />
            ))}
        </ul>
      </Container>
    </motion.section>
  );
};
