import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// ___Types______________________________________________________________________________________________________________
import { WrapperProps, BoxWrapperProps } from "./wrappers.types";

// ___Styled Component___________________________________________________________________________________________________
const BoxWrapper = styled(motion.div)<WrapperProps & BoxWrapperProps>`
    position: relative;
    box-sizing: border-box;
    width: ${ props => props.width };
    max-width: ${ props => props.maxWidth };
    height: ${ props => props.height };
    padding: ${ props => props.padding };
    border: ${ props => props.border };
    margin: ${ props => props.margin };
    z-index: ${ props => props.zIndex };

    ${props =>
        props.type === 'home-slider' &&
            css<WrapperProps & BoxWrapperProps>`
                margin-top: 16px;
                padding 10px;

                @media (min-width: 700px) {
                    padding 40px;
                }

                @media (min-width: 1100px) {
                    padding 80px;
                }
        `}
`;

export default BoxWrapper;