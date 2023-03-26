import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// ___Types______________________________________________________________________________________________________________
import { WrapperProps } from "./wrappers.types";

interface AbsoluteCenteredWrapperProps {
    case?: 'hero-slider-dots';
    top?: string;
    left?: string;
}

// ___Styled Component___________________________________________________________________________________________________
const AbsoluteCenteredWrapper = styled(motion.div)<WrapperProps & AbsoluteCenteredWrapperProps>`
    position: absolute;
    top: ${ props => props.top ?? '50%' };
    left: ${ props => props.left ?? '50%' };
    transform: translate(-50%, -50%);
    width: ${ props => props.width };
    max-width: ${ props => props.maxWidth };
    height: ${ props => props.height };
    padding: ${ props => props.padding };
    border: ${ props => props.border };
    margin: ${ props => props.margin };
    z-index: ${ props => props.zIndex };

    ${ props =>
        props.case === 'hero-slider-dots' &&
            css<WrapperProps & AbsoluteCenteredWrapperProps>`
                top: 130%;

            @media screen and (min-width: 1100px) {
                top: 50%;
                left: 46%;
            }
        `}
`;

export default AbsoluteCenteredWrapper;