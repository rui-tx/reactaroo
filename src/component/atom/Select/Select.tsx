import React from "react";
import {SelectStyles} from "./Select.styles";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
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

const Select: React.FC<SelectProps> = ({children, variant, ...rest}) => {
    return (
        <SelectStyles variant={variant} {...rest} >
            {children}
        </SelectStyles>
    );
};

export default Select;