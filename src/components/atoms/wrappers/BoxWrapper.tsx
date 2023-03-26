import styled from "styled-components";
import { motion } from "framer-motion";

// ___Types______________________________________________________________________________________________________________
import { WrapperProps } from "./wrappers.types";

// ___Styled Component___________________________________________________________________________________________________
const BoxWrapper = styled(motion.div)<WrapperProps>`
    position: relative;
    box-sizing: border-box;
    width: ${ props => props.width };
    max-width: ${ props => props.maxWidth };
    height: ${ props => props.height };
    padding: ${ props => props.padding };
    border: ${ props => props.border };
    margin: ${ props => props.margin };
    z-index: ${ props => props.zIndex };
`;

export default BoxWrapper;