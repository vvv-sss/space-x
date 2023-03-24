// ___Styled Components___________________________________________________________________________________________________
import StyledDiv from "./HeroDescriptionWrapper.styles";

// ___Types_______________________________________________________________________________________________________________
interface HeroDescriptionWrapperProps {
    children: React.ReactNode;
}

// ___Component___________________________________________________________________________________________________________
const HeroDescriptionWrapper = ({ children }: HeroDescriptionWrapperProps) => {
    return (
        <StyledDiv>
            { children }
        </StyledDiv>
    )
}

export default HeroDescriptionWrapper;