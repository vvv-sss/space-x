import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

// ___Types______________________________________________________________________________________________________________
interface StyledNavLinkProps {
    case?: 'favorites';
    to: string;
}

// ___Styled Component___________________________________________________________________________________________________
const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
    text-decoration: none;

    ${props =>
        props.case === 'favorites' &&
            css`
            &.active > button {
                background-color: hsla(335, 71%, 54%, 1);
            }

            &.active > button > img {
                filter: 
                    brightness(0) 
                    saturate(100%) 
                    invert(100%) 
                    sepia(100%) 
                    saturate(1%) 
                    hue-rotate(308deg) 
                    brightness(102%) 
                    contrast(101%);
            }
        `}
`;

export default StyledNavLink;