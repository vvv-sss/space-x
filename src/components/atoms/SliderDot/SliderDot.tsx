// ___Styled Components__________________________________________________________________________________________________
import StyledButton from "./SliderDot.styles";

// ___Types______________________________________________________________________________________________________________
interface SliderDotProps {
    isActive?: boolean | undefined;
    handleClick: () => void;
}

// ___Component__________________________________________________________________________________________________________
const SliderDot = ({ isActive, handleClick }: SliderDotProps) => {
    return ( 
        <StyledButton 
            onClick={ handleClick }
            isActive={ isActive }
        >
        </StyledButton>
    );
}

export default SliderDot;

