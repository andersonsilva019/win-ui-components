import { cn } from "../../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "text" | "link";
  iconPosition?: "left" | "right";
}


export default function Button({
  children,
  icon,
  className,
  size = "medium",
  variant = "primary",
  iconPosition = "left",
  ...props
}: ButtonProps) {

  const SIZES = {
  small: "pt-1 pb-1 pr-4 pl-4 text-sm",
  medium: "pt-2 pb-2 pr-8 pl-8 text-base",
  large: "pt-3 pb-3 pr-12 pl-12 text-lg",
};

const VARIANTS = {
  primary: `
    bg-purple text-white rounded
    hover:bg-purple-light
    active:bg-purple-dark
    disabled:bg-disabled disabled:text-white
  `,
  secondary: `
    bg-white text-purple border border-purple rounded
    hover:text-purple-light hover:border-purple-light
    active:text-purple-dark active:border-purple-dark
    disabled:text-disabled disabled:border-disabled
  `,
  text: `
    bg-transparent text-purple
    hover:text-purple-light
    active:text-purple-dark
    disabled:text-disabled
  `,
  link: `
    text-link underline
    hover:text-link-light
    active:text-link-dark
    disabled:text-disabled
  `,
};


  return (
    <button
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 transition-colors disabled:cursor-not-allowed",
        VARIANTS[variant],
        SIZES[size],
        icon && (iconPosition === "left" ? "flex-row" : "flex-row-reverse"),
        className,
      )}
      {...props}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </button>
  );
}
