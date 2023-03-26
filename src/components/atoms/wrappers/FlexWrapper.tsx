import styled, { css } from "styled-components";
import { motion } from "framer-motion";

// ___Types______________________________________________________________________________________________________________
import { WrapperProps, FlexWrapperProps } from "./wrappers.types";

// ___Styled Component___________________________________________________________________________________________________
const FlexWrapper = styled(motion.div)<WrapperProps & FlexWrapperProps>`
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex: ${ props => props.flex };
    flex-direction: ${ props => props.flexDirection };
    justify-content: ${ props => props.justifyContent };
    align-items: ${ props => props.alignItems };
    flex-wrap: ${ props => props.flexWrap };
    gap: ${ props => props.gap };
    width: ${ props => props.width };
    max-width: ${ props => props.maxWidth };
    height: ${ props => props.height };
    padding: ${ props => props.padding };
    border: ${ props => props.border };
    margin: ${ props => props.margin };
    z-index: ${ props => props.zIndex };

    ${props =>
        props.type === 'header' &&
            css<WrapperProps & FlexWrapperProps>`
                position: fixed;
                flex-direction: column-reverse;
                justify-content: space-around;
                align-items: center;
                gap: 16px;
                width: 100%;
                padding: 16px 0px;
                background: rgba(30, 30, 30, 0.478);
                z-index: 2;

            @media (min-width: 950px) {
                flex-direction: row;
                box-sizing: border-box;
                height: 80px;
                padding: 0 80px;
            }
        `}

    ${props =>
        props.type === 'hero' &&
            css<WrapperProps & FlexWrapperProps>`
                justify-content: ${ props => props.justifyContent ?? 'center' };
                align-items: ${ props => props.alignItems ?? 'center' };
                width: 100vw;
                height: ${props => props.height ?? '100vh'};
                padding-top: 80px;
                background: #1E1E1E;
                overflow: hidden;
        `}

    ${props =>
        props.type === 'slider-header' &&
            css<WrapperProps & FlexWrapperProps>`
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 8px;
                max-width: 1273px;
                margin: 0 auto 40px;
        `}

    ${props =>
        props.type === 'card' &&
            css<WrapperProps & FlexWrapperProps>`
                flex: 0 0 411px;
                height: 572px;
                flex-direction: column;
                justify-content: space-between;
                border: 1px solid #D3EAFF;
        `}

    ${props =>
        props.type === 'button' &&
            css<WrapperProps & FlexWrapperProps>`
                width: ${ props => props.width };
                justify-content: ${ props => props.justifyContent ?? 'space-between' };
                align-items: ${ props => props.alignItems ?? 'center' };
                gap: ${ props => props.gap ?? '16px' };
        `}
`;

export default FlexWrapper;