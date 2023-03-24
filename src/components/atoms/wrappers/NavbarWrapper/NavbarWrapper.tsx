// ___Styled Components__________________________________________________________________________________________________
import StyledUl from "./NavbarWrapper.styles";

// ___Types______________________________________________________________________________________________________________
interface NavbarLinksWrapperProps {
    children: React.ReactNode;
}

// ___Component__________________________________________________________________________________________________________
const NavbarLinksWrapper = ({ children }: NavbarLinksWrapperProps) => {
    return (
        <StyledUl>
            { children }
        </StyledUl>
    )
}

export default NavbarLinksWrapper;