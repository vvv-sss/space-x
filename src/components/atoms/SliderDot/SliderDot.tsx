// ___Styled Components__________________________________________________________________________________________________
import { CircleButtonWrapper, InnerCircle } from './SliderDot.styles';

// ___Types______________________________________________________________________________________________________________
export interface SliderDotProps {
    color: 'black' | 'white';
    active?: boolean;
    handleClick?: () => void;
}

// ___Component__________________________________________________________________________________________________________
const SliderDot = ({ active, color, handleClick }: SliderDotProps) => {
    return (
        <CircleButtonWrapper 
            active={ active } 
            color={ color } 
            onClick={ handleClick }
        >
            {active && <InnerCircle color={ color } />}
        </CircleButtonWrapper>
    );
};

export default SliderDot;

