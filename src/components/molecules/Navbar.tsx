// ___Components__________________________________________________________________________________________________________
import NavbarLink from "../atoms/NavbarLink/NavbarLink";
import NavbarLinksWrapper from "../atoms/wrappers/NavbarWrapper/NavbarWrapper";

// ___Component___________________________________________________________________________________________________________
const Navbar = () => {
    return ( 
        <nav>
            <NavbarLinksWrapper>
                <NavbarLink title='Home' path='home' />
                <NavbarLink title='Tours' path='tours' />
                <NavbarLink title='About' path='about' />
                <NavbarLink title='Help' path='help' />
            </NavbarLinksWrapper>
        </nav>
    );
}

export default Navbar;