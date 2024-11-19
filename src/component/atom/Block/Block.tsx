import React from "react";
import {BlockStyles} from "./Block.styles";

interface Props extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    variant?: {
        center?: boolean;
        embossed?: boolean;
    };

    [key: string]: any;
}

const Block: React.FC<Props> = ({children, variant, ...rest}) => {
    return <BlockStyles variant={variant} {...rest}>
        {children}
    </BlockStyles>;
};

export default Block;