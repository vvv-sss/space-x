import { NavLink } from "react-router-dom";
import styled from "styled-components";

// ___Styled Component____________________________________________________________________________________________________
const StyledLi = styled.li`
    list-style: none;
`;

const StyledNavLink = styled(NavLink)`
    color: #ffffff;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.1s;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #ffffff;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.3s ease-out;
    }

    &.active {
        &:before {
        transform: scaleX(1);
        }
    }

    &:hover:before {
        transform: scaleX(1);
    }
`;

export { StyledLi, StyledNavLink };