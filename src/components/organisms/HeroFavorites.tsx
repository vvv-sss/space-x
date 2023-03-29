// ___Components_________________________________________________________________________________________________________
import FlexWrapper from '../atoms/wrappers/FlexWrapper';
import AbsoluteCenteredWrapper from '../atoms/wrappers/AbsoluteCenteredWrapper';
import Image from '../atoms/Image';
// ___Assets_____________________________________________________________________________________________________________
import Banner from '../../assets/images/image_3.png';
import HeaderOne from '../atoms/typography/HeaderOne';

// ___Component__________________________________________________________________________________________________________
const HeroFavorites = () => {
    return ( 
        <FlexWrapper 
            type='hero'
            height='440px' 
        >
            <AbsoluteCenteredWrapper zIndex={ 1 }>
                <HeaderOne case='hero'>
                    Favorites
                </HeaderOne>
            </AbsoluteCenteredWrapper>
            <Image 
                type='banner-favorite'
                src={ Banner }
                alt='An astronaut in open space'
            />
        </FlexWrapper>
    );
}

export default HeroFavorites;