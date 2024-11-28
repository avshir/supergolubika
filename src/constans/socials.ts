import { FunctionComponent } from "react";
import { EmailIcon, InstagramFillIcon, PhoneIcon } from "../components/Icons";

interface ISocial {
  href: string;
  title: string;
  icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const socials: ISocial[] = [
  {
    href: "tel:+375297571691",
    title: "Phone",
    icon: PhoneIcon,
  },
  {
    href: "mailto:yurchachos@gmail.com",
    title: "Email",
    icon: EmailIcon,
  },
  {
    href: "https://instagram.com",
    title: "Instagram",
    icon: InstagramFillIcon,
  },
];
