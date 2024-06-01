import clsx from "clsx";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  isSecondary?: boolean;
};

const Button = ({
  label,
  type,
  disabled,
  isSecondary = false,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        "text-lg uppercase tracking-widest",
        isSecondary ? "" : "bg-primary-faint rounded-xl px-6 py-4"
      )}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
