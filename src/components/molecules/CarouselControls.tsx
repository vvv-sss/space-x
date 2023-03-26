// ___Components_________________________________________________________________________________________________________
import FlexWrapper from "../atoms/wrappers/FlexWrapper";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

// ___Types______________________________________________________________________________________________________________
interface CarouselControlsProps {
    cardData: any;
    cardCounter: number;
    setCardCounter: (value: React.SetStateAction<number>) => void;
}


// ___Component__________________________________________________________________________________________________________
const CarouselControls = ({ 
    cardData, 
    cardCounter, 
    setCardCounter 
}: CarouselControlsProps) => {
    return ( 
        <FlexWrapper type='button' gap='16px'>
            <Button 
                view='icon' 
                handleClick={ () => {
                    if (cardCounter > 0) { setCardCounter(prevState => prevState - 1) }
                }}
            >
                <Icon type='arrow-left' />
            </Button>
            <Button 
                view='icon' 
                handleClick={ () => { 
                    if ( cardData && cardCounter < cardData.length - 3) { setCardCounter(prevState => prevState + 1) }
                }} 
            >
                <Icon type='arrow-right' />
            </Button>
        </FlexWrapper>
    );
}

export default CarouselControls;