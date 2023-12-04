import { ButtonHTMLAttributes, FC } from "react";
import ArrowIcon from "@/components/icons/ArrowIcon";

const ArrowButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className="flex items-center tracking-[1px] text-xs font-bold uppercase"
    >
      <span className="opacity-50 hover:opacity-100 hover:text-orange">
        {children}
      </span>{" "}
      <ArrowIcon className="ml-2" />
    </button>
  );
};

export default ArrowButton;
