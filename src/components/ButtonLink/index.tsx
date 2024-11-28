import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface ButtonLinkProps {
  children: React.ReactNode;
  href: string;
  type?: string;
  size: keyof typeof sizes;
  color?: keyof typeof colors;
  className?: string;
}

const sizes = {
  md: "px-4 py-2 text-base font-medium",
  lg: "px-6 py-3 text-lg font-semibold",
  xl: "px-10 py-4 text-xl font-bold",
};

const colors = {
  indigo: "bg-indigo-500 hover:bg-indigo-700 text-white",
  primary: "bg-primary hover:bg-primary/80 text-gray-100",
  primaryAccent: "bg-primary hover:bg-accent text-accent hover:text-primary",
  accent: "bg-accent hover:bg-primary text-primary hover:text-accent",
  green: "bg-accent-green hover:bg-accent text-primary",
  outline: "text-primary hover:text-primary/80",
};

export default function ButtonLink({
  color = "primary",
  size,
  children,
  href,
  className,
}: ButtonLinkProps) {
  const colorClasses = colors[color];
  const sizeClasses = sizes[size];

  return (
    <Link
      to={href}
      rel="noopener noreferrer"
      className={twMerge(
        `rounded-full transition-colors ${sizeClasses} ${colorClasses}`,
        className
      )}
    >
      {children}
    </Link>
  );
}
