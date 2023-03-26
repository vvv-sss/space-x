import styled from "styled-components";
import { motion } from "framer-motion";

// ___Types______________________________________________________________________________________________________________
interface AbsoluteCenteredWrapperProps {
    top?: string;
    left?: string;
    zIndex?: number;
}

// ___Styled Component___________________________________________________________________________________________________
const AbsoluteCenteredWrapper = styled(motion.div)<AbsoluteCenteredWrapperProps>`
    position: absolute;
    top: ${ props => props.top ?? '50%' };
    left: ${ props => props.left ?? '50%' };
    transform: translate(-50%, -50%);
    z-index: ${ props => props.zIndex };
`;

export default AbsoluteCenteredWrapper;