// ___React______________________________________________________________________________________________________________
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// ___Components_________________________________________________________________________________________________________
import FlexWrapper from "../atoms/wrappers/FlexWrapper";
import LogoLink from "../molecules/LogoLink";
import Navbar from "../molecules/Navbar";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import StyledNavLink from "../atoms/StyledNavLink";

// ___Component__________________________________________________________________________________________________________
const Header = () => {
    // Redirection to the Home Page on initial loading
    const navigate = useNavigate();
    const { pathname } = useLocation();
    
    useEffect(() => {
        pathname === "/" && navigate("/home");
    }, [pathname]);

    return ( 
        <>  
            <FlexWrapper 
                type='header'
                initial={{ y: '-100vh' }}
                animate={{ y: 0, transition: {duration: 0.5, delay: 0.5} }}
            >
                <LogoLink />
                <Navbar />
                <FlexWrapper 
                    type='button' 
                    width='228px' 
                    gap='12px'
                >
                    <StyledNavLink to='favorites' case='favorites'>
                        <Button view='icon'>
                            <Icon type='add-to-favorites' />
                        </Button>
                    </StyledNavLink>
                    <Button view='text'>
                        Sign In
                    </Button>
                </FlexWrapper>
            </FlexWrapper>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Header;