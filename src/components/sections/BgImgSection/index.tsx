import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import { bgImg_blueberry_many_1 } from "../../Images";

interface BgImgSectionProps {
  children?: ReactNode;
  bgOverlayColorClassName?: string;
  bgImgClassName?: string;
}

export const BgImgSection = ({
  children,
  bgOverlayColorClassName = "bg-black/80",
  bgImgClassName = bgImg_blueberry_many_1,
}: BgImgSectionProps) => {
  return (
    <section
      className={twMerge(
        "py-12 sm:py-20 xl:py-28 relative bg-cover bg-center bg-no-repeat",
        bgImgClassName
      )}
    >
      <div
        className={twMerge("absolute inset-0", bgOverlayColorClassName)}
      ></div>
      <div className="relative z-10 flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};