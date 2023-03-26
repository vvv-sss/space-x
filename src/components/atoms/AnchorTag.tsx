import styled from "styled-components";
import { motion } from "framer-motion";

// ___Styled Component__________________________________________________________________________________________________
const AnchorTag = styled(motion.a)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #FFFFFF;
    font-weight: 300;
    font-size: 32px;
    line-height: 38px;
    cursor: pointer;
`;

export default AnchorTag;