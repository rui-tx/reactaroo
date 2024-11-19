import React from 'react';

// Atoms
import Block from "./component/atom/Block/Block";
import Label from "./component/atom/Label/Label";
import Button from "./component/atom/Button/Button";
import Input from "./component/atom/Input/Input";
import Select from "./component/atom/Select/Select";

// Molecules
import LabeledInput from "./component/molecule/LabeledInput/LabeledInput";

// Organisms
import LoginForm from "./component/organism/LoginForm/LoginForm";

function App() {
    return (
        <Block>
            <h2>Welcome to Reactaroo, a React component library!</h2>
            <Block>
                <h3>Component List</h3>
                <Block variant={{embossed: true}}>
                    <h4>Atoms</h4>
                    <ul>
                        <li>Block. Variants: center, embossed</li>
                        <li>Button. Variants: success, cancel, disabled, fancy</li>
                        <li>Input. Variants: success, cancel, disabled</li>
                        <li>Select. Variants: success, cancel, disabled</li>
                        <li>Label. Variants: success, cancel, disabled</li>
                    </ul>
                </Block>
                <Block variant={{embossed: true}}>
                    <h4>Molecules</h4>
                    <ul>
                        <li>LabeledInput. Layout: vertical, horizontal</li>
                    </ul>
                </Block>

                <Block variant={{embossed: true}}>
                    <h4>Organisms</h4>
                    <ul>
                        <li>Login Form.</li>
                    </ul>
                </Block>
            </Block>
            <h4>Block</h4>
            <Block variant={{embossed: true}}>
                <Block>This is the default block</Block>
                <Block variant={{embossed: true, center: true}}>This is a block with variant embossed and
                    center</Block>
            </Block>

            <h4>Label</h4>
            <Block variant={{embossed: true, center: true}}>
                <Label>Default</Label>
                <Label variant={{success: true}}>Success</Label>
                <Label variant={{cancel: true}}>Cancel</Label>
                <Label variant={{disabled: true}}>Disabled</Label>
            </Block>

            <h4>Button</h4>
            <Block variant={{embossed: true, center: true}}>
                <Button>Default</Button>
                <Button variant={{success: true}}>Success</Button>
                <Button variant={{cancel: true}}>Cancel</Button>
                <Button variant={{disabled: true}}>Disabled</Button>
                <Button variant={{fancy: true}}>Fancy</Button>
            </Block>

            <h4>Input</h4>
            <Block variant={{embossed: true, center: true}}>
                <Input placeholder={"Default"}/>
                <Input variant={{success: true}} placeholder={"Success"}/>
                <Input variant={{cancel: true}} placeholder={"Cancel"}/>
                <Input variant={{disabled: true}} disabled placeholder={"Disabled"}/>
            </Block>

            <h4>Select</h4>
            <Block variant={{embossed: true, center: true}}>
                <Select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </Select>
            </Block>

            <h4>Labeled Input</h4>
            <Block variant={{embossed: true, center: true}}>
                <LabeledInput label={"Default Input"}/>
                <LabeledInput layout={"horizontal"} label={"Horizontal Input"}/>
            </Block>

            <h4>Login Form</h4>
            <Block variant={{embossed: true, center: true}}>
                <LoginForm label={"Username"} labeledInputLayout={"horizontal"}/>
            </Block>
        </Block>

    );
}

export default App;
