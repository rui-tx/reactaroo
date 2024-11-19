import React from "react";
import {ButtonStyles} from "./Button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: {
        success?: boolean;
        cancel?: boolean;
        disabled?: boolean;
        buttonLink?: boolean;
        fancy?: boolean;
    };

    [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({children, variant, ...rest}) => {
    return (
        <ButtonStyles variant={variant} {...rest}>
            {children}
        </ButtonStyles>
    );
};

export default Button;
