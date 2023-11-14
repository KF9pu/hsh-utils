import type { ButtonHTMLAttributes, FC } from "react";
import "../styles.css";
interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "sm" | "md" | "lg";
}
declare const TextButton: FC<TextButtonProps>;
export default TextButton;
