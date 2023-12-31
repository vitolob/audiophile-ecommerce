import { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

const Button: FC<ButtonProps> = ({
  children,
  variant = "outline",
  className,
  ...rest
}) => {
  const baseClassList = "px-6 py-3 tracking-[1px] text-xs font-bold uppercase";
  const defaultClassList =
    "bg-white hover:bg-dark hover:text-white border border-black";

  let variantClassList =
    variant === "primary"
      ? "bg-orange hover:bg-orange-light text-white"
      : defaultClassList;

  const combinedClasses = `${baseClassList} ${variantClassList} ${
    className || ""
  }`.trim();

  return (
    <button {...rest} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;
