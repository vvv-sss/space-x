// ___Styled Components__________________________________________________________________________________________________
import StyledDiv from "./SliderCardsWrapper.styles";

// ___Types______________________________________________________________________________________________________________
interface SliderCardsWrapperProps {
    children: React.ReactNode;
}

// ___Component__________________________________________________________________________________________________________
const SliderCardsWrapper = ({ children }: SliderCardsWrapperProps) => {
    return (
        <StyledDiv>
            { children }
        </StyledDiv>
    )
}

export default SliderCardsWrapper;