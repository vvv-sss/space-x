// ___Styled Components__________________________________________________________________________________________________
import StyledDiv from "./CardWrapper.styles";

// ___Types______________________________________________________________________________________________________________
interface CardWrapperProps {
    children: React.ReactNode;
}

// ___Component__________________________________________________________________________________________________________
const CardWrapper = ({ children }: CardWrapperProps) => {
    return (
        <StyledDiv>
            { children }
        </StyledDiv>
    )
}

export default CardWrapper;