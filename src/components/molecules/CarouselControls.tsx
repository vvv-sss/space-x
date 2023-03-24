// ___Components_________________________________________________________________________________________________________
import ButtonWrapper from "../atoms/wrappers/ButtonWrapper/ButtonWrapper";
import ButtonWithIcon from "./ButtonWithIcon";

// ___Types______________________________________________________________________________________________________________
interface CarouselControlsProps {
    array: any;
    sliceStart: number;
    setSliceStart: (value: React.SetStateAction<number>) => void;
    sliceEnd: number;
    setSliceEnd: (value: React.SetStateAction<number>) => void;
}
// ___Component__________________________________________________________________________________________________________
const CarouselControls = ({ array, sliceStart, setSliceStart, sliceEnd, setSliceEnd }: CarouselControlsProps) => {
    return ( 
        <ButtonWrapper gap='16px'>
            <ButtonWithIcon 
                mode='button'
                icon='arrow-left' 
                action={ () => {
                    if (sliceStart > 0) {
                        setSliceStart((precCount) => precCount - 1);
                        setSliceEnd((precCount) => precCount - 1);
                    }
                }} 
            />
            <ButtonWithIcon 
                mode='button'
                icon='arrow-right' 
                action={ () => { 
                    if (array && sliceEnd < array.length) {
                        array.length && setSliceStart((precCount) => precCount + 1);
                        array.length && setSliceEnd((precCount) => precCount + 1);
                    }
                }} 
            />
        </ButtonWrapper>
    );
}

export default CarouselControls;