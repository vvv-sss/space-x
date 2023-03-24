// ___React______________________________________________________________________________________________________________
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
// ___Components_________________________________________________________________________________________________________
import HeaderWrapper from "../atoms/wrappers/HeaderWrapper/HeaderWrapper";
import LogoLink from "../molecules/LogoLink";
import Navbar from "../molecules/Navbar";
import ButtonWrapper from "../atoms/wrappers/ButtonWrapper/ButtonWrapper";
import ButtonWithText from "../molecules/ButtonWithText";
import ButtonWithIcon from "../molecules/ButtonWithIcon";


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
            <HeaderWrapper>
                <LogoLink />
                <Navbar />
                <ButtonWrapper width='228px' gap='12px'>
                    <ButtonWithIcon 
                        mode='link'
                        path='favorites'
                        icon='add-to-favorite'
                    />
                    <ButtonWithText 
                        mode='button'
                        title='Sign In' 
                    />
                </ButtonWrapper>
            </HeaderWrapper>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Header;