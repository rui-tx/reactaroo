import styled from 'styled-components';

interface VariantConfig {
    center?: boolean;
    embossed?: boolean;
}

interface BlockProps {
    variant?: VariantConfig;
}

export const BlockStyles = styled.div<BlockProps>`
    // Media queries
    @media (max-width: 575px) {
        padding: 0.7rem;
        margin: 0.5rem;
    }

    @media (min-width: 576px) and (max-width: 767px) {
        padding: 0.9rem;
        margin: 0.5rem;
    }

    @media (min-width: 768px) {
        padding: 1rem;
        margin: 1rem;
    }

    // Variant Styles
    display: block;
    ${({variant, theme}) => {
        const styles: string[] = [];

        if (variant) {
            if (variant.center) {
                styles.push(`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                `);
            }

            if (variant.embossed) {
                styles.push(`
                    background-color: ${theme.block.colors.bgColor};
                    border: 1px solid ${theme.block.colors.borderColor};
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    border-radius: ${theme.block.boxModel.borderRadius};
                `);
            }
        }

        return styles.join('\n');
    }}
`;