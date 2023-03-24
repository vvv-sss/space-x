// ___React______________________________________________________________________________________________________________
import { NavLink } from "react-router-dom";
// ___Styled Components__________________________________________________________________________________________________
import { StyledLi, StyledNavLink } from './NavbarLink.styles';

// ___Component__________________________________________________________________________________________________________
interface NavbarLinkProps {
    title: string;
    path: string;
}

const NavbarLink = ({ path, title }: NavbarLinkProps) => {
    return (
        <StyledLi>
            <StyledNavLink to={ path }>{ title }</StyledNavLink>
        </StyledLi>
    )
}

export default NavbarLink;