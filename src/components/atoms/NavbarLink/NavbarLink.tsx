// ___Styled Components__________________________________________________________________________________________________
import { StyledLi, StyledNavLink } from './NavbarLink.styles';

// ___Types______________________________________________________________________________________________________________
interface NavbarLinkProps {
    title: string;
    path: string;
}


// ___Component__________________________________________________________________________________________________________
const NavbarLink = ({ path, title }: NavbarLinkProps) => {
    return (
        <StyledLi>
            <StyledNavLink to={ path }>{ title }</StyledNavLink>
        </StyledLi>
    )
}

export default NavbarLink;