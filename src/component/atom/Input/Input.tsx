import React from "react";
import {InputStyles} from "./Input.styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: {
        success?: boolean;
        cancel?: boolean;
        disabled?: boolean;
    };

    [key: string]: any;
}

const Input: React.FC<InputProps> = ({variant, ...rest}) => {
    return (
        <InputStyles variant={variant} {...rest} />
    );
};

export default Input;