// ___Styled Components__________________________________________________________________________________________________
import StyledDiv from "./SliderHeadWrapper.styles";

// ___Types______________________________________________________________________________________________________________
interface SliderHeadWrapperProps {
    children: React.ReactNode;
    justifyContent?: string;
}

// ___Component__________________________________________________________________________________________________________
const SliderHeadWrapper = ({ children, justifyContent }: SliderHeadWrapperProps) => {
    return (
        <StyledDiv justifyContent={ justifyContent }>
            { children }
        </StyledDiv>
    )
}

export default SliderHeadWrapper;