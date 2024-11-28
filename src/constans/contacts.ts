import { FunctionComponent } from "react";
import { EmailIcon, PhoneIcon, MapIcon } from "../components/Icons";

interface IContact {
  href: string;
  title: string;
  info: string;
  icon: FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconSize: string;
}

export const contacts: IContact[] = [
  {
    href: "https://maps.app.goo.gl/hAT9EaCMucpC9tSx9",
    title: "Address",
    info: "ул. Гастелло, 21, д.Рогово, Минский район, Беларусь, 223015",
    icon: MapIcon,
    iconSize: "size-6",
  },
  {
    href: "tel:+375297571691",
    title: "Phone",
    info: "+375 (29) 757 16 91",
    icon: PhoneIcon,
    iconSize: "size-5",
  },
  {
    href: "mailto:yurchachos@gmail.com",
    title: "Email",
    info: "yurchachos@gmail.com",
    icon: EmailIcon,
    iconSize: "size-5",
  },
];
