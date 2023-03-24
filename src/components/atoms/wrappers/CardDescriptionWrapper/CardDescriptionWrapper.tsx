// ___Styled Components___________________________________________________________________________________________________
import StyledDiv from "./CardDescriptionWrapper.styles";

// ___Types______________________________________________________________________________________________________________
interface CardDescriptionWrapperProps {
    children: React.ReactNode;
}

// ___Component__________________________________________________________________________________________________________
const CardDescriptionWrapper = ({ children }: CardDescriptionWrapperProps) => {
    return (
        <StyledDiv>
            { children }
        </StyledDiv>
    )
}

export default CardDescriptionWrapper;