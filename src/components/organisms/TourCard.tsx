// ___React______________________________________________________________________________________________________________
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// ___Components_________________________________________________________________________________________________________
import CardWrapper from "../atoms/wrappers/CardWrapper/CardWrapper";
import CardDescriptionWrapper from "../atoms/wrappers/CardDescriptionWrapper/CardDescriptionWrapper";
import CardImage from "../atoms/CardImage";
import HeaderThree from "../atoms/typography/HeaderThree/HeaderThree";
import Paragraph from "../atoms/typography/Paragraph/Paragraph";
import ButtonWrapper from "../atoms/wrappers/ButtonWrapper/ButtonWrapper";
import ButtonWithText from "../molecules/ButtonWithText";
import ButtonWithIcon from "../molecules/ButtonWithIcon";
// ___Assets_____________________________________________________________________________________________________________
import Image1 from '../../assets/images/image_1.png';
import Image2 from '../../assets/images/image_2.png';
import Image3 from '../../assets/images/image_3.png';

// ___Types______________________________________________________________________________________________________________
interface TourCardProps {
    title: string;
    details: string;
    imageNumber: number;
    action?: () => void;
}


// ___Component__________________________________________________________________________________________________________
const TourCard = ({ title, details, imageNumber, action }: TourCardProps) => {

    const [imageSrc, setImageSrc] = useState();
    const { pathname } = useLocation();

    useEffect(() => {
        if (imageNumber === 1) {
            setImageSrc(Image1);
        } else if (imageNumber === 2) {
            setImageSrc(Image2);
        } else if (imageNumber === 3) {
            setImageSrc(Image3);
        }
    },[]);

    return ( 
        <CardWrapper>
            <CardImage src={ imageSrc } alt="Card Image" />
            <CardDescriptionWrapper>
                <HeaderThree>
                    { title }
                </HeaderThree>
                <Paragraph>
                    { details }
                    <span>...</span>
                </Paragraph>
                <ButtonWrapper gap='16px'>
                    <ButtonWithText mode='button' title='Buy' />
                    { pathname.includes('home') && 
                        <ButtonWithIcon 
                            mode='button' 
                            icon='add-to-favorite' 
                            action={ action } 
                        /> 
                    }
                    { pathname.includes('favorites') && 
                        <ButtonWithIcon 
                            mode='button' 
                            icon='delete' 
                            action={ action } 
                        /> 
                    }
                </ButtonWrapper>
            </CardDescriptionWrapper>
        </CardWrapper>
    );
}

export default TourCard;