// ___Components_________________________________________________________________________________________________________
import HeroWrapper from '../atoms/wrappers/HeroWrapper/HeroWrapper';
import HeroBanner from '../atoms/HeroBanner';
// ___Assets_____________________________________________________________________________________________________________
import Banner from '../../assets/images/image_3.png';
import HeaderOne from '../atoms/typography/HeaderOne/HeaderOne';


// ___Component__________________________________________________________________________________________________________
const HeroFavorites = () => {
    return ( 
        <HeroWrapper height='440px'>
                <HeaderOne>
                    Favorites
                </HeaderOne>
                <HeroBanner 
                    src={ Banner }
                    alt='An astronaut in open space'
                    height='auto'
                />
        </HeroWrapper>
    );
}

export default HeroFavorites;