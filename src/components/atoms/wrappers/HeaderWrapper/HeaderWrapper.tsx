// ___Styled Components___________________________________________________________________________________________________
import StyledHeader from "./HeaderWrapper.styles";

// ___Types_______________________________________________________________________________________________________________
interface HeaderWrapperProps {
    children: React.ReactNode;
}

// ___Component___________________________________________________________________________________________________________
const HeaderWrapper = ({ children }: HeaderWrapperProps) => {
    return (
        <StyledHeader>
            { children }
        </StyledHeader>
    )
}

export default HeaderWrapper;