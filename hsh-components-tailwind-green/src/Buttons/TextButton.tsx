import type { ButtonHTMLAttributes, FC } from "react";
import React from "react";
import "../styles.css";

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // 추가 속성
  size?: "sm" | "md" | "lg";
}

const TextButton: FC<TextButtonProps> = ({ className, size, ...props }) => {
  return (
    <button
      className={[
        "bg-[rgba(172,238,187,1)]",
        TextButtonSize(size),
        "text-[rgba(240,240,240,1)]",
        className,
      ].join(" ")}
      {...props}
    >
      aaa
    </button>
  );
};
export default TextButton;

function TextButtonSize(size?: "sm" | "md" | "lg") {
  return !size ? "p-[12px]" : "p-[24px]";
}
