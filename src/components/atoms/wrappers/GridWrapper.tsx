import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// ___Types______________________________________________________________________________________________________________
import { WrapperProps, GridWrapperProps } from "./wrappers.types";

// ___Styled Component___________________________________________________________________________________________________
const GridWrapper = styled(motion.div)<WrapperProps & GridWrapperProps>`
    position: relative;
    box-sizing: border-box;
    display: grid;
    width: ${ props => props.width };
    max-width: ${ props => props.maxWidth };
    height: ${ props => props.height };
    padding: ${ props => props.padding };
    border: ${ props => props.border };
    margin: ${ props => props.margin };
    z-index: ${ props => props.zIndex };
    grid-template-columns: ${ props => props.gridTemplateColumns };
    grid-template-rows: ${ props => props.gridTemplateRows };
    grid-gap: ${ props => props.gap };
    grid-auto-flow: ${ props => props.gridAutoFlow };
    grid-auto-rows: ${ props => props.gridAutoRows };
    grid-auto-columns: ${ props => props.gridAutoColumns };
    grid-column: ${ props => props.gridColumn };
    justify-items: ${ props => props.justifyItems };
    align-items: ${ props => props.alignItems };

    ${ props =>
        props.type === 'home-slider' &&
            css`
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 411px));
                justify-content: center;
                gap: 20px;
                height: 580px;
                overflow: hidden;
        `}

    ${ props =>
        props.type === 'favorites-slider' &&
            css`
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 411px));
                align-items: center;
                gap: 20px;
                max-width: 1273px;
                margin: 0 auto;
        `}
`;

export default GridWrapper;