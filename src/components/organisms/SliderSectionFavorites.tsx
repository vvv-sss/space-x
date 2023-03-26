// ___Recoil_____________________________________________________________________________________________________________
import { useRecoilValue } from 'recoil';
import { favoritesListState } from '../../recoil/Store';
// ___Components_________________________________________________________________________________________________________
import BoxWrapper from '../atoms/wrappers/BoxWrapper';
import FlexWrapper from '../atoms/wrappers/FlexWrapper';
import GridWrapper from '../atoms/wrappers/GridWrapper';
import Paragraph from '../atoms/typography/Paragraph';
import Button from '../atoms/Button';
import TourCard from './TourCard';
// ___Hooks______________________________________________________________________________________________________________
import { useClearFavorites } from '../../hooks/useClearFavorites';
// ___Helpers____________________________________________________________________________________________________________
import { getImageNum } from '../../utils/getImageNum';

// ___Component__________________________________________________________________________________________________________
const SliderSectionFavorites = () => {

    const favoritesList = useRecoilValue(favoritesListState);

    const clearFavorites = useClearFavorites();

    return ( 
        <BoxWrapper padding='80px'>
            { favoritesList.length > 0 &&  
                <FlexWrapper justifyContent='flex-end' margin='0 auto 40px' maxWidth='1273px' >
                    <Button handleClick={ () => clearFavorites() } >
                        Clear all
                    </Button>
                </FlexWrapper>
            }
            { favoritesList.length === 0 &&
                <Paragraph textAlign='center'>You have no favorite tours yet!</Paragraph>
            }
            <GridWrapper type='favorites-slider' >
                { favoritesList && favoritesList.map((data, index) => {
                    const num = getImageNum(index);
                    return (
                        <TourCard 
                            key={ data.id } 
                            id={ data.id }
                            title={ data.title } 
                            details={ data.details } 
                            imageNumber={ num }
                        />
                    )
                })}
            </GridWrapper>
        </BoxWrapper>
    );
}

export default SliderSectionFavorites;