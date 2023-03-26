// ___Components__________________________________________________________________________________________________________
import NavbarLink from "../atoms/NavbarLink/NavbarLink";
import FlexWrapper from "../atoms/wrappers/FlexWrapper";

// ___Component___________________________________________________________________________________________________________
const Navbar = () => {
    return ( 
        <nav>
            <FlexWrapper alignItems='center' gap='32px'>
                <NavbarLink title='Home' path='home' />
                <NavbarLink title='Tours' path='tours' />
                <NavbarLink title='About' path='about' />
                <NavbarLink title='Help' path='help' />
            </FlexWrapper>
        </nav>
    );
}

export default Navbar;