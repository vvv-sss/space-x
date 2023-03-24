import styled from "styled-components";
import { NavLink } from "react-router-dom";

// ___Types______________________________________________________________________________________________________________
interface StyledButtonProps {
    view: 'text' | 'icon';
    styles?: 'transparent';
}

// ___Styled Component___________________________________________________________________________________________________
const styles = `
    box-sizing: border-box;
    flex-shrink: 0;
    flex-grow: 0;
    border: none;
    outline: none;
    transition: all 0.2s;
    cursor: pointer;
`;

const stylesButtonWithText = `
    flex-grow: 1;
    flex-shrink: 1;
    padding: 12px;
    background-color: hsl(208.63636363636365, 100%, 91.37254901960785%);
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: uppercase;

    &:hover {
        background-color: hsl(208.63636363636365, 100%, 85%);
    }
`;

const stylesButtonWithIcon = `
    display: grid;
    place-content: center;
    width: 53px;
    height: 53px;
    background-color: #ECECEC;

    &:hover {
        background-color: hsla(335, 71%, 84%, 1);
    }

`;

const stylesButtonLinkWithIcon = `
    text-decoration: none;

    &.active {
        background-color: hsla(335, 71%, 54%, 1);
    }
`;

export const StyledLink = styled(NavLink)<StyledButtonProps>`
    ${styles}
    ${stylesButtonWithIcon}
    ${({ view }) => view === 'icon' && stylesButtonLinkWithIcon }
`;

export const StyledButton = styled.button<StyledButtonProps>`
    ${styles}
    ${({ view }) => view === 'text' ? stylesButtonWithText : stylesButtonWithIcon}
    ${props => props.styles === 'transparent' && {
        flexGrow: 0,
        width: 'fit-content',
        color: 'hsla(212, 22%, 43%, 1)',
        fontSize: '24px',
        fontWeight: 300,
        backgroundColor: 'transparent',
        textTransform: 'none'
    }}
`;