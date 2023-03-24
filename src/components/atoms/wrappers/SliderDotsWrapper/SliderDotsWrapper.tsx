// ___Styled Components__________________________________________________________________________________________________
import StyledDiv from "./SliderDotsWrapper.styles";

// ___Types______________________________________________________________________________________________________________
interface SliderDotsWrapperProps {
    children: React.ReactNode;
}

// ___Component__________________________________________________________________________________________________________
const SliderDotsWrapper = ({ children }: SliderDotsWrapperProps) => {
    return (
        <StyledDiv>
            { children }
        </StyledDiv>
    )
}

export default SliderDotsWrapper;