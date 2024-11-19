import styled from "styled-components";

interface VariantConfig {
    default?: boolean;
    success?: boolean;
    cancel?: boolean;
    disabled?: boolean;
    fancy?: boolean;
}

interface ButtonProps {
    variant?: VariantConfig;
}

export const ButtonStyles = styled.button<ButtonProps>`
    // Default styles
    border: ${(props) => props.theme.button.boxModel.border};
    border-radius: ${(props) => props.theme.button.boxModel.borderRadius};
    box-shadow: ${(props) => props.theme.button.boxModel.boxShadow};
    box-sizing: ${(props) => props.theme.button.boxModel.boxSizing};
    color: ${(props) => props.theme.button.colors.bgColor};
    cursor: pointer;
    font-size: ${(props) => props.theme.global.typography.fontSize};
    padding: ${(props) => props.theme.button.boxModel.padding};
    margin: ${(props) => props.theme.button.boxModel.margin};
    transition: background-color 0.25s ease, box-shadow 0.3s ease;

    &:hover {
        background-color: ${(props) => props.theme.global.colors.accentColor};
        transition: background-color 0.25s ease;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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
                background-color: ${theme.button.colors.successBgColor};
                color: ${theme.global.colors.primaryBgColor};
            `);
            }

            if (variant.cancel) {
                styles.push(`
                background-color: ${theme.button.colors.cancelBgColor};
                color: ${theme.global.colors.primaryBgColor};
            `);
            }

            if (variant.disabled) {
                styles.push(`
                background-color: ${theme.button.colors.disabledBgColor};
                color: ${theme.global.colors.primaryBgColor};
                cursor: not-allowed;
                opacity: 0.7;
            `);
            }

            if (variant.fancy) {
                styles.push(`
                  position: relative;
                  overflow: hidden;
                  z-index: 1;
        
                  &::before {
                    content: "";
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: conic-gradient(
                      from 0deg,
                      #ff0000,
                      #ff7f00,
                      #ffff00,
                      #00ff00,
                      #0000ff,
                      #8b00ff,
                      #ff0000
                    );
                    animation: rotate 4s linear infinite;
                    z-index: -1;
                  }
        
                  &::after {
                    content: "";
                    position: absolute;
                    inset: 3px;
                    background: inherit;
                    border-radius: inherit;
                    z-index: -1;
                  }
        
                  &:hover {
                    background-color: ${theme.global.colors.accentColor};
                    color: ${theme.global.colors.primaryBgColor};
                    box-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
                  }
        
                  &:hover::before {
                    animation: rotate 2s linear infinite;
                  }
        
                  @keyframes rotate {
                    100% {
                      transform: rotate(360deg);
                    }
                  }
                `);
            }
        }

        return styles.join("\n");
    }}
`;
