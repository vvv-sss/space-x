// ___Styled Components___________________________________________________________________________________________________
import StyledSection from "./HeroWrapper.styles";

// ___Types_______________________________________________________________________________________________________________
interface HeroWrapperProps {
    children: React.ReactNode;
    height?: string;
}

// ___Component___________________________________________________________________________________________________________
const HeroWrapper = ({ children, height }: HeroWrapperProps) => {
    return (
        <StyledSection height={ height }>
            { children }
        </StyledSection>
    )
}

export default HeroWrapper;