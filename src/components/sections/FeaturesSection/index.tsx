import { motion } from "motion/react";
import { forwardRef } from "react";

import { PointIcon } from "../../Icons";
import { Container } from "../../Container";

import { features } from "../../../constans/features";
import { golubika_kids_hand_IMG } from "../../Images";
import {
  listAnimation,
  textAnimation,
} from "../../../utils/animationVariantsMotion";

type FeatureItemProps = {
  title: string;
  text: string;
};

const FeatureItem = forwardRef<HTMLDivElement, FeatureItemProps>(
  ({ title, text }, ref) => {
    return (
      <div className="flex space-x-2 sm:space-x-4" ref={ref}>
        <PointIcon className="flex-shrink-0 size-6 fill-accent-green stroke-primary" />
        <div className="space-y-2">
          <h3 className="text-lg leading-snug">{title}</h3>
          <p className="leading-snug">{text} </p>
        </div>
      </div>
    );
  }
);

const MFeatureItem = motion(FeatureItem);

export const FeaturesSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      id="features-section"
      className="py-12 sm:py-20 xl:py-28"
    >
      <Container>
        <motion.h2 variants={textAnimation} className="max-w-xl mx-auto">
          Почему именно наша <span className="h2-text-span">голубика</span>?
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
          className="flex flex-col gap-10 lg:flex-row pt-4 md:pt-8 lg:pt-12 items-center"
        >
          <div className="lg:basis-1/2 xl:basis-3/5 bg-gray-100">
            <div className="flex items-center justify-center">
              <motion.img
                variants={listAnimation}
                custom={1}
                src={golubika_kids_hand_IMG}
                alt="рука ребенка с голубикой"
                className="rounded-xl shadow-lg aspect-video sm:min-h-96 object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6 lg:basis-1/2">
            {features &&
              features.map((item, index) => (
                <MFeatureItem
                  key={item.id}
                  {...item}
                  variants={listAnimation}
                  custom={index + 1}
                />
              ))}
          </div>
        </motion.div>
      </Container>
    </motion.section>
  );
};
