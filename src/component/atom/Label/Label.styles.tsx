import styled from "styled-components";

interface VariantConfig {
    success?: boolean;
    cancel?: boolean;
    disabled?: boolean;
}

interface LabelProps {
    variant?: VariantConfig;
}

export const LabelStyles = styled.label<LabelProps>`
    // Default styles
    border: ${(props) => props.theme.label.boxModel.border};
    border-radius: ${(props) => props.theme.label.boxModel.borderRadius};
    box-shadow: ${(props) => props.theme.label.boxModel.boxShadow};
    box-sizing: ${(props) => props.theme.label.boxModel.boxSizing};
    color: ${(props) => props.theme.label.colors.bgColor};
    font-size: ${(props) => props.theme.global.typography.fontSize};
    padding: ${(props) => props.theme.label.boxModel.padding};
    margin: ${(props) => props.theme.label.boxModel.margin};

    // Variant Styles
    ${({variant, theme}) => {
        const styles: string[] = [];

        if (variant) {
            if (variant.success) {
                styles.push(`
                background-color: ${theme.label.colors.successBgColor};
                color: ${theme.global.colors.primaryBgColor};
            `);
            }

            if (variant.cancel) {
                styles.push(`
                background-color: ${theme.label.colors.cancelBgColor};
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

