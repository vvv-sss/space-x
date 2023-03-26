// ___React______________________________________________________________________________________________________________
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// ___Components_________________________________________________________________________________________________________
import FlexWrapper from "../atoms/wrappers/FlexWrapper";
import CardImage from "../atoms/Image";
import HeaderThree from "../atoms/typography/HeaderThree";
import Paragraph from "../atoms/typography/Paragraph";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
// ___Hooks_____________________________________________________________________________________________________________
import { useFavorites } from "../../hooks/useFavorites";
import { useAddToFavorites } from '../../hooks/useAddToFavorites';
import { useRemoveFromFavorites } from '../../hooks/useRemoveFromFavorites';
// ___Assets_____________________________________________________________________________________________________________
import Image1 from '../../assets/images/image_1.png';
import Image2 from '../../assets/images/image_2.png';
import Image3 from '../../assets/images/image_3.png';

// ___Types______________________________________________________________________________________________________________
interface TourCardProps {
    id: string;
    title: string;
    details: string;
    imageNumber: number;
}

// ___Component__________________________________________________________________________________________________________
const TourCard = ({ id, title, details, imageNumber }: TourCardProps) => {
    
    const isFavoriteInState = useFavorites(id); // Checking if this tour is already in favorites or not
    const [isFavorite, setIsFavorite] = useState(isFavoriteInState);

    const addToFavorites = useAddToFavorites();
    const removeFromFavorites = useRemoveFromFavorites();

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
        <FlexWrapper type='card' >
            <CardImage 
                src={ imageSrc } 
                alt="Card Image"
                width='100%'
                height='296px'
                margin='0 0 16px'
                objectFit='cover'
            />
                <HeaderThree 
                    padding='0 24px'
                    textAlign='center'
                >
                    { title }
                </HeaderThree>

                <Paragraph 
                    truncate={ true } 
                    textLines={ 2 }
                    padding='0 24px'
                    margin='0 0 36px'
                    textAlign='center'
                >
                    { details }
                </Paragraph>

                <FlexWrapper type='button' padding='0 24px 20px' >

                    <Button view='text'>Buy</Button>

                    { pathname.includes('home') && 
                        <Button 
                            view='icon' 
                            isActive={ isFavorite }
                            handleClick={ () => {
                                addToFavorites(id, title, details);
                                setIsFavorite(true);
                            }}
                        >
                            <Icon type='add-to-favorites' />
                        </Button>
                    }

                    { pathname.includes('favorites') && 
                        <Button 
                            view='icon'
                            handleClick={ () => {
                                removeFromFavorites(id);
                            }}
                        >
                            <Icon type='remove' />
                        </Button>
                    }
                    
                </FlexWrapper>
            
        </FlexWrapper>
    );
}

export default TourCard;