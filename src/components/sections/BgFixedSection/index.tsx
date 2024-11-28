import { ReactNode } from "react";

import { twMerge } from "tailwind-merge";
import { bgImg_blueberry_food_1 } from "../../Images";

interface BgFixedSectionProps {
  children?: ReactNode;
  bgImgClassName?: string;
}

export const BgFixedSection = ({
  children,
  bgImgClassName = bgImg_blueberry_food_1,
}: BgFixedSectionProps) => {
  return (
    <section
      id="bg-fixed-section"
      className={twMerge(
        "h-60 sm:h-80 bg-cover bg-center bg-fixed",
        bgImgClassName
      )}
    >
      {children}
    </section>
  );
};
