import styled from "styled-components";

interface LabeledInputProps {
    layout: "vertical" | "horizontal"; // Define possible layout options
}

export const LabeledInputStyles = styled.div<LabeledInputProps>`
    display: flex;
    flex-direction: ${({layout}) => (layout === "vertical" ? "column" : "row")};
    align-items: ${(props) => props.theme.labeledInput.flex.alignItems};
    gap: ${(props) => props.theme.labeledInput.flex.gap};
`;