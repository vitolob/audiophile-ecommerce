import { FC, InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  fieldLabel: string;
  activeState?: boolean;
};

const RadioButton: FC<TextInputProps> = ({
  fieldLabel,
  activeState,
  ...rest
}) => {
  return (
    <div
      className={`inline-block min-w-[210px] py-2 px-4 text-sm font-semibold border ${
        activeState ? "border-orange" : "border-[#CFCFCF]"
      } border-[#CFCFCF] hover:border-orange rounded-lg placeholder:opacity-40`}
    >
      <div className="flex items-center gap-2">
        <input type="radio" {...rest} className="accent-orange" />
        <label className="text-xs font-semibold">{fieldLabel}</label>
      </div>
    </div>
  );
};

export default RadioButton;
