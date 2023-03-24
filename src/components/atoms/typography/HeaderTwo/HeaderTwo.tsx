// ___Styled Components___________________________________________________________________________________________________
import StyledH2 from "./HeaderTwo.styles";

// ___Types_______________________________________________________________________________________________________________
interface HeaderTwoProps {
    children: React.ReactNode;
}

// ___Component___________________________________________________________________________________________________________
const HeaderTwo = ({ children }: HeaderTwoProps) => {
    return (
        <StyledH2>
            { children }
        </StyledH2>
    )
}

export default HeaderTwo;