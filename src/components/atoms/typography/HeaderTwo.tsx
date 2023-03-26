import styled from "styled-components";
import { TypographyTypes } from "./typography.types";

// ___Styled Component___________________________________________________________________________________________________
const HeaderTwo = styled.h2<TypographyTypes>`
    padding: ${ props => props.padding };
    margin: ${ props => props.margin };
    text-align: ${ props => props.textAlign };
    color: ${ props => props.color ?? '#1E1E1E' };
    background-color: ${ props => props.backgroundColor };
    font-family: ${ props => props.fontFamily ?? "'Syne', sans-serif" };
    font-size: ${ props => props.fontSize ?? '32px' };
    font-weight: ${ props => props.fontWeight ?? 800 };
    line-height: ${ props => props.lineHeight ?? '38px' };
    letter-spacing: ${ props => props.letterSpacing };
    text-transform: ${ props => props.textTransform ?? 'uppercase' };
    text-decoration: ${ props => props.textDecoration };
    text-shadow: ${ props => props.textShadow };
    word-spacing: ${ props => props.wordSpacing };
    text-indent: ${ props => props.textIndent };
    text-overflow: ${ props => props.textOverflow };
    white-space: ${ props => props.whiteSpace };
`;

export default HeaderTwo;