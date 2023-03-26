// ___React______________________________________________________________________________________________________________
import { useState } from 'react';
// ___Components_________________________________________________________________________________________________________
import FlexWrapper from '../atoms/wrappers/FlexWrapper';
import AbsoluteCenteredWrapper from '../atoms/wrappers/AbsoluteCenteredWrapper';
import BoxWrapper from '../atoms/wrappers/BoxWrapper';
import HeaderOne from '../atoms/typography/HeaderOne';
import Span from '../atoms/typography/Span';
import NavSliderDots from '../molecules/NavSliderDots';
import HeroSlideShow from '../molecules/HeroSlideShow';
import ScrollToElement from '../molecules/ScrollToElement';
import Image from '../atoms/Image';
// ___Assets_____________________________________________________________________________________________________________
import ArrowDown from '../../assets/icons/arrow_down.svg';

// ___Component_________________________________________________________________________________________________________
const HeroHome = () => {

    const [showBanner1, setShowBanner1] = useState(true);
    const [showBanner2, setShowBanner2] = useState(false);
    const [showBanner3, setShowBanner3] = useState(false);

    return ( 
        <FlexWrapper 
            type='hero' 
            alignItems='flex-end' 
            padding='0 0 30px 0'
        >
            <AbsoluteCenteredWrapper 
                zIndex={ 1 }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: {duration: 2} }}
            >
                <HeaderOne margin='auto 0'>
                    The space is waiting for
                    <Span type='hero-header'>
                        you
                        <NavSliderDots
                            stateImage1={ showBanner1 }
                            stateImage2={ showBanner2 }
                            stateImage3={ showBanner3 }
                            setImage1={ setShowBanner1 }
                            setImage2={ setShowBanner2 }
                            setImage3={ setShowBanner3 }
                        />
                    </Span>
                </HeaderOne>
            </AbsoluteCenteredWrapper>
            <BoxWrapper zIndex={ 1 }>
                <ScrollToElement href='home__slider-section'>
                    <Span type='explore-tours'>Explore tours</Span>
                    <Image src={ ArrowDown } alt='Icon with arrow down sign' />
                </ScrollToElement>
            </BoxWrapper>
            <HeroSlideShow 
                stateImage1={ showBanner1 }
                stateImage2={ showBanner2 }
                stateImage3={ showBanner3 }
                setImage1={ setShowBanner1 }
                setImage2={ setShowBanner2 }
                setImage3={ setShowBanner3 }
            />
        </FlexWrapper>
    );
}

export default HeroHome;
