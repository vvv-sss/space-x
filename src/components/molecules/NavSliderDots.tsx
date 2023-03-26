// ___Components_________________________________________________________________________________________________________
import FlexWrapper from "../atoms/wrappers/FlexWrapper";
import AbsoluteCenteredWrapper from "../atoms/wrappers/AbsoluteCenteredWrapper";
import SliderDot from "../atoms/SliderDot/SliderDot";

// ___Types______________________________________________________________________________________________________________
interface NavSliderDotsProps {
    stateImage1: boolean;
    stateImage2: boolean;
    stateImage3: boolean;
    setImage1: (value: React.SetStateAction<boolean>) => void;
    setImage2: (value: React.SetStateAction<boolean>) => void;
    setImage3: (value: React.SetStateAction<boolean>) => void;
}

// ___Component__________________________________________________________________________________________________________
const NavSliderDots = ( {
    stateImage1, 
    stateImage2, 
    stateImage3, 
    setImage1, 
    setImage2, 
    setImage3
}: NavSliderDotsProps) => {
    return ( 
        <AbsoluteCenteredWrapper left='46%'>
            <FlexWrapper 
                justifyContent='center' 
                alignItems='center' 
                gap='8px'
            > 
                <SliderDot 
                    handleClick={ ()=> {
                        setImage1(true);
                        setImage2(false);
                        setImage3(false);
                    }} 
                    active={ stateImage1 }
                    color='white'
                />
                <SliderDot 
                    handleClick={ ()=> {
                        setImage1(false);
                        setImage2(true);
                        setImage3(false); 
                    }} 
                    active={ stateImage2 }
                    color='white'
                />
                <SliderDot 
                    handleClick={ ()=> {
                        setImage1(false);
                        setImage2(false);
                        setImage3(true); 
                    }} 
                    active={ stateImage3 }
                    color='white'
                />
            </FlexWrapper>
        </AbsoluteCenteredWrapper>
    );
}

export default NavSliderDots;