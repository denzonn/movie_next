import { FC } from "react";

interface ButtonProps {
  label: string;
  isSecondary?: boolean;
  classname?: string;
}

const Button: FC<ButtonProps> = ({ label, classname, isSecondary }) => {
  return isSecondary ? (
    <button
      className={`${classname} bg-secondary_color hover:bg-hover_secondary_color rounded-md text-white font-semibold text-lg py-[10px] px-7 text-center flex flex-row gap-x-2 items-center transition`}
    >
      <div>
        <i className="fa-solid fa-circle-info 2xl"></i>
      </div>
      <div>{label}</div>
    </button>
  ) : (
    <button
      className={`${classname} bg-white hover:bg-hover_white rounded-md text-black font-semibold text-lg py-[10px] px-7 text-center flex flex-row gap-x-2 items-center transition`}
    >
      <div>
        <i className="fas fa-play text-black text-xl"></i>
      </div>
      <div>{label}</div>
    </button>
  );
};

export default Button;
