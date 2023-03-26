import styled, { css } from "styled-components";
import { TypographyTypes } from "./typography.types";

// ___Styled Component___________________________________________________________________________________________________
const Paragraph = styled.p<TypographyTypes>`
    padding: ${ props => props.padding };
    margin: ${ props => props.margin };
    text-align: ${ props => props.textAlign };
    color: ${ props => props.color ?? '#556B84' };
    background-color: ${ props => props.backgroundColor };
    font-family: ${ props => props.fontFamily };
    font-size: ${ props => props.fontSize ?? '24px' };
    font-weight: ${ props => props.fontWeight ?? 300 };
    line-height: ${ props => props.lineHeight ?? '29px' };
    letter-spacing: ${ props => props.letterSpacing };
    text-transform: ${ props => props.textTransform };
    text-decoration: ${ props => props.textDecoration };
    text-shadow: ${ props => props.textShadow };
    word-spacing: ${ props => props.wordSpacing };
    text-indent: ${ props => props.textIndent };
    text-overflow: ${ props => props.textOverflow };
    white-space: ${ props => props.whiteSpace };

    ${ props => props.truncate &&
        css<TypographyTypes>`
            display: -webkit-box;
            -webkit-line-clamp: ${ props => props.textLines };
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        `
    }

`;

export default Paragraph;