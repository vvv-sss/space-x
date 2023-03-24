// ___React_______________________________________________________________________________________________________________
import { NavLink } from "react-router-dom";
// ___Styled______________________________________________________________________________________________________________
import styled from "styled-components";

// ___Styled Component____________________________________________________________________________________________________
const StyledLi = styled.li`
    list-style: none;
`;

const StyledNavLink = styled(NavLink)`
    color:#FFFFFF;
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.1s;

    &.active {
        border-bottom: 1px solid white;
    }

    &:hover {
        font-weight: 700;
    }
`;

export { StyledLi, StyledNavLink };