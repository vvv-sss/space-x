// ___Components_________________________________________________________________________________________________________
import SliderDotsWrapper from "../atoms/wrappers/SliderDotsWrapper/SliderDotsWrapper";
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
const NavSliderDots = ( {stateImage1, stateImage2, stateImage3, setImage1, setImage2, setImage3}: NavSliderDotsProps) => {
    return ( 
        <SliderDotsWrapper>
            <SliderDot 
                handleClick={ ()=> {
                    setImage1(true);
                    setImage2(false);
                    setImage3(false);
                }} 
                isActive={ stateImage1 }
            />
            <SliderDot 
                handleClick={ ()=> {
                    setImage1(false);
                    setImage2(true);
                    setImage3(false); 
                }} 
                isActive={ stateImage2 }
            />
            <SliderDot 
                handleClick={ ()=> {
                    setImage1(false);
                    setImage2(false);
                    setImage3(true); 
                }} 
                isActive={ stateImage3 }
            />
        </SliderDotsWrapper>
    );
}

export default NavSliderDots;