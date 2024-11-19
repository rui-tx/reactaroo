import React from "react";
import Block from "../../atom/Block/Block";
import Label from "../../atom/Label/Label";
import Button from "../../atom/Button/Button";
import LabeledInput from "../../molecule/LabeledInput/LabeledInput";

interface LoginFormProps extends React.InputHTMLAttributes<HTMLInputElement> {

    [key: string]: any;
}

const LoginForm: React.FC<LoginFormProps> = ({
                                                 label,
                                                 labeledInputLayout,
                                                 ...inputProps
                                             }) => {
    return (
        <Block variant={{embossed: true}}>
            <Block variant={{center: true}}>
                <Label>Login</Label>
            </Block>
            <Block>
                <LabeledInput layout={labeledInputLayout} label={label}/>
                <LabeledInput layout={labeledInputLayout} label={label}/>
            </Block>
            <Block>
                <Button>Login</Button>
            </Block>
            <Block>
                <Label>Don't have an account? <a href="https://ruitx.ducknexus.com">Sign up</a></Label>
                <Label>Forgot your password? <a href="https://ruitx.ducknexus.com">Reset password</a></Label>
            </Block>
        </Block>

    );
};

export default LoginForm;
