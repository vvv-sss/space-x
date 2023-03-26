import styled, { css } from "styled-components";
import { TypographyTypes } from "./typography.types";

// ___Types______________________________________________________________________________________________________________
interface HeaderOneProps {
    case?: 'hero';
} 

// ___Styled Component___________________________________________________________________________________________________
const HeaderOne = styled.h1<TypographyTypes & HeaderOneProps>`
    padding: ${ props => props.padding };
    margin: ${ props => props.margin };
    text-align: ${ props => props.textAlign };
    color: ${ props => props.color ?? '#FFFFFF' };
    background-color: ${ props => props.backgroundColor };
    font-family: ${ props => props.fontFamily ?? "'Syne', sans-serif" };
    font-size: ${ props => props.fontSize ?? '32px' };
    font-weight: ${ props => props.fontWeight ?? 800 };
    line-height: ${ props => props.lineHeight ?? 1 };
    letter-spacing: ${ props => props.letterSpacing };
    text-transform: ${ props => props.textTransform ?? 'uppercase' };
    text-decoration: ${ props => props.textDecoration };
    text-shadow: ${ props => props.textShadow };
    word-spacing: ${ props => props.wordSpacing };
    text-indent: ${ props => props.textIndent };
    text-overflow: ${ props => props.textOverflow };
    white-space: ${ props => props.whiteSpace };

    ${props =>
        props.case === 'hero' &&
            css<TypographyTypes & HeaderOneProps>`
                text-align: center;

                @media screen and (min-width: 600px) {
                    font-size: 42px;
                }

                @media screen and (min-width: 800px) {
                    font-size: 48px;
                }
        `}

    
`;

export default HeaderOne;