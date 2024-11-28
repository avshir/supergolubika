import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { navlinks } from "../../constans/navlinks";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className="flex justify-center space-x-4">
      {navlinks.map(({ label, href }) => (
        <NavLink
          to={href}
          className={twMerge(
            "rounded-xl px-3 py-2 text-gray-100 transition-colors hover:text-accent hover:bg-accent/10",
            className
          )}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};
