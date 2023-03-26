import styled, { css } from "styled-components";
import { TypographyTypes } from "./typography.types";

// ___Types______________________________________________________________________________________________________________
interface SpanTypes {
    type?: 'hero-header' | 'explore-tours';
}

// ___Styled Component___________________________________________________________________________________________________
const Span = styled.span<TypographyTypes & SpanTypes>`
    padding: ${ props => props.padding };
    margin: ${ props => props.margin };
    text-align: ${ props => props.textAlign };
    color: ${ props => props.color };
    background-color: ${ props => props.backgroundColor };
    font-family: ${ props => props.fontFamily };
    font-size: ${ props => props.fontSize };
    font-weight: ${ props => props.fontWeight };
    line-height: ${ props => props.lineHeight };
    letter-spacing: ${ props => props.letterSpacing };
    text-transform: ${ props => props.textTransform };
    text-decoration: ${ props => props.textDecoration };
    text-shadow: ${ props => props.textShadow };
    word-spacing: ${ props => props.wordSpacing };
    text-indent: ${ props => props.textIndent };
    text-overflow: ${ props => props.textOverflow };
    white-space: ${ props => props.whiteSpace };

    ${props =>
        props.type === 'hero-header' &&
            css<TypographyTypes & SpanTypes>`
            display: block;
            position: relative;
            top: -15px;
            text-align: center;
            font-size: ${ props => props.fontSize ?? '310px' };
            line-height: 1;
        `}

    ${props =>
        props.type === 'explore-tours' &&
            css`
            font-size: 32px;
            font-weight: 300;
            color: #FFFFFF;
            text-shadow: 1px 1px 0px black, 
                1px -1px 0px black, 
                -1px 1px 0px black, 
                -1px -1px 0px black, 
                1px 0px 0px black, 
                0px 1px 0px black, 
                -1px 0px 0px black, 
			    0px -1px 0px black;
        `}
`;

export default Span;