// ___Styled Components___________________________________________________________________________________________________
import StyledDiv from "./ButtonWrapper.styles";
// ___Types______________________________________________________________________________________________________________
interface ButtonWrapperProps {
    children: React.ReactNode;
    gap?: string;
    width?: string;
}

// ___Component__________________________________________________________________________________________________________
const ButtonWrapper = ({ children, width, gap }: ButtonWrapperProps) => {
    return (
        <StyledDiv gap={ gap } width={ width } >
            { children }
        </StyledDiv>
    )
}

export default ButtonWrapper;


