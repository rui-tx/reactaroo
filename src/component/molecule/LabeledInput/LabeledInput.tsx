import React from "react";
import Input from "../../atom/Input/Input";
import Label from "../../atom/Label/Label";
import {LabeledInputStyles} from "./LabeledInput.styles";

interface LabeledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    labelVariant?: {
        success?: boolean;
        cancel?: boolean;
        disabled?: boolean;
    };
    inputVariant?: {
        success?: boolean;
        cancel?: boolean;
        disabled?: boolean;
    };
    layout?: "vertical" | "horizontal";

    [key: string]: any;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
                                                       label,
                                                       labelVariant,
                                                       inputVariant,
                                                       layout = "vertical",
                                                       ...inputProps
                                                   }) => {
    return (
        <LabeledInputStyles layout={layout}>
            <Label variant={labelVariant}>{label}</Label>
            <Input variant={inputVariant} {...inputProps} />
        </LabeledInputStyles>
    );
};

export default LabeledInput;
