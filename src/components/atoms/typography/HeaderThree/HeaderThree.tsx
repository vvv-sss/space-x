// ___Styled Components___________________________________________________________________________________________________
import StyledH3 from "./HeaderThree.styles";

// ___Types_______________________________________________________________________________________________________________
interface HeaderThreeProps {
    children: React.ReactNode;
}

// ___Component___________________________________________________________________________________________________________
const HeaderThree = ({ children }: HeaderThreeProps) => {
    return (
        <StyledH3>
            { children }
        </StyledH3>
    )
}

export default HeaderThree;