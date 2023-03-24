// ___Styled Component___________________________________________________________________________________________________
import StyledSection from "./SliderWrapper.styles";

// ___Types______________________________________________________________________________________________________________
interface SliderWrapperProps {
    children: React.ReactNode;
    id?: string;
}

// ___Component__________________________________________________________________________________________________________
const SliderWrapper = ({ children, id }: SliderWrapperProps) => {
    return (
        <StyledSection id={ id }>
            { children }
        </StyledSection>
    )
}

export default SliderWrapper;