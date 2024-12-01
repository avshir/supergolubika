import { PointIcon } from "../../Icons";
import { Container } from "../../Container";

import { features } from "../../../constans/features";
import { golubika_kids_hand_IMG } from "../../Images";

export const FeaturesSection = () => {
  return (
    <section id="features-section" className="py-12 sm:py-20 xl:py-28">
      <Container>
        <h2 className="max-w-xl mx-auto">
          Почему именно наша <span className="h2-text-span">голубика</span>?
        </h2>
        <div className="flex flex-col gap-10 lg:flex-row pt-4 md:pt-8 lg:pt-12 items-center">
          <div className="lg:basis-1/2 xl:basis-3/5 bg-gray-100">
            <div className="flex items-center justify-center">
              <img
                src={golubika_kids_hand_IMG}
                alt="рука ребенка с голубикой"
                className="rounded-xl shadow-lg aspect-video sm:min-h-96 object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-6 lg:basis-1/2">
            {features &&
              features.map((item) => <FeatureItem key={item.id} {...item} />)}
          </div>
        </div>
      </Container>
    </section>
  );
};

type FeatureItemProps = {
  title: string;
  text: string;
};

const FeatureItem = ({ title, text }: FeatureItemProps) => {
  return (
    <div className="flex space-x-2 sm:space-x-4">
      <PointIcon className="flex-shrink-0 size-6 fill-accent-green stroke-primary" />
      <div className="space-y-2">
        <h3 className="text-lg leading-snug">{title}</h3>
        <p className="leading-snug">{text} </p>
      </div>
    </div>
  );
};