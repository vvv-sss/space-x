// ___Recoil_____________________________________________________________________________________________________________
import { useRecoilValue } from 'recoil';
// ___Components_________________________________________________________________________________________________________
import SliderCardsWrapper from "../atoms/wrappers/SliderCardsWrapper/SliderCardsWrapper";
import SliderHeadWrapper from "../atoms/wrappers/SliderHeadWrapper/SliderHeadWrapper";
import SliderWrapper from "../atoms/wrappers/SliderWrapper/SliderWrapper";
import ButtonWithText from '../molecules/ButtonWithText';
import TourCard from './TourCard';
// ___Hooks______________________________________________________________________________________________________________
import { useRemoveFromFavorites } from '../../hooks/useRemoveFromFavorites';
import { useClearFavorites } from '../../hooks/useClearFavorites';
// ___Helpers____________________________________________________________________________________________________________
import { getImageNum } from '../../utils/getImageNum';
// ___State______________________________________________________________________________________________________________
import { favoritesListState } from '../../recoil/Store';


// ___Component__________________________________________________________________________________________________________
const SliderSectionFavorites = () => {

    const favoritesList = useRecoilValue(favoritesListState);

    const removeFromFavorites = useRemoveFromFavorites();
    const clearFavorites = useClearFavorites();

    return ( 
        <SliderWrapper>
            <SliderHeadWrapper justifyContent='end'>
                <ButtonWithText 
                    mode='button' 
                    title='Clear all' 
                    styles='transparent' 
                    action={ () => clearFavorites() }
                />
            </SliderHeadWrapper>
            <SliderCardsWrapper>
                { favoritesList && favoritesList.map((data, index) => {
                    const num = getImageNum(index);
                    return (
                        <TourCard 
                            key={ data.id } 
                            title={ data.title } 
                            details={ data.details } 
                            imageNumber={ num }
                            action={ () => removeFromFavorites(data.id) }
                        />
                    )
                })}
            </SliderCardsWrapper>
        </SliderWrapper>
    );
}

export default SliderSectionFavorites;