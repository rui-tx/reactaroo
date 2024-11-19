import React from "react";
import {LabelStyles} from "./Label.styles";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    variant?: {
        success?: boolean;
        cancel?: boolean;
        disabled?: boolean;
    };

    [key: string]: any;
}

const Label: React.FC<LabelProps> = ({variant, ...rest}) => {
    return (
        <LabelStyles variant={variant} {...rest} />
    );
};

export default Label;