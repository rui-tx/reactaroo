import styled from "styled-components";

interface VariantConfig {
    success?: boolean;
    cancel?: boolean;
    disabled?: boolean;
}

interface InputProps {
    variant?: VariantConfig;
}

export const InputStyles = styled.input<InputProps>`
    // Default styles
    border: ${(props) => props.theme.input.boxModel.border};
    border-radius: ${(props) => props.theme.input.boxModel.borderRadius};
    box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.15);
    box-sizing: ${(props) => props.theme.input.boxModel.boxSizing};
    color: ${(props) => props.theme.input.colors.bgColor};
    cursor: pointer;
    font-size: ${(props) => props.theme.global.typography.fontSize};
    padding: ${(props) => props.theme.input.boxModel.padding};
    margin: ${(props) => props.theme.input.boxModel.margin};
    transition: background-color 0.25s ease;

    &:hover {
        background-color: ${(props) => props.theme.global.colors.accentColor};
        transition: background-color 0.25s ease;
    }

    &:focus {
        background-color: ${(props) => props.theme.input.colors.bgColor};
        color: ${(props) => props.theme.global.colors.accentColor};
        transition: background-color 0.25s ease;
    }

    &:active {
        background-color: ${(props) => props.theme.global.colors.primaryBgColor};
        color: ${(props) => props.theme.global.colors.primaryTextColor};
    }

    // Variant Styles
    ${({variant, theme}) => {
        const styles: string[] = [];

        if (variant) {
            if (variant.success) {
                styles.push(`
                background-color: ${theme.input.colors.successBgColor};
                color: ${theme.global.colors.primaryBgColor};
            `);
            }

            if (variant.cancel) {
                styles.push(`
                background-color: ${theme.input.colors.cancelBgColor};
                color: ${theme.global.colors.primaryBgColor};
            `);
            }

            if (variant.disabled) {
                styles.push(`
                background-color: ${theme.input.colors.disabledBgColor};
                color: ${theme.global.colors.primaryBgColor};
                cursor: not-allowed;
                opacity: 0.7;
            `);
            }

        }

        return styles.join("\n");
    }}
`;
