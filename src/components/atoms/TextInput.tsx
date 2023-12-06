import { FC, InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  fieldLabel: string;
  errorState?: boolean;
};

const TextInput: FC<TextInputProps> = ({ fieldLabel, errorState, ...rest }) => {
  return (
    <div>
      <label className="text-xs font-semibold">{fieldLabel}</label>
      <br />
      <input
        type="text"
        {...rest}
        className={`min-w-[210px] py-2 px-4 text-sm font-semibold border border-[#CFCFCF] rounded-lg placeholder:opacity-40 ${
          errorState ? "focus:outline-[#CD2C2C]" : "focus:outline-orange"
        }`}
      />
    </div>
  );
};

export default TextInput;
