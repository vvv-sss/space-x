// ___React______________________________________________________________________________________________________________
import { useState, useEffect } from 'react';
// ___Components_________________________________________________________________________________________________________
import HeroWrapper from '../atoms/wrappers/HeroWrapper/HeroWrapper';
import HeroDescriptionWrapper from '../atoms/wrappers/HeroDescriptionWrapper/HeroDescriptionWrapper';
import HeaderOne from '../atoms/typography/HeaderOne/HeaderOne';
import HeroBanner from '../atoms/HeroBanner';
import NavSliderDots from '../molecules/NavSliderDots';
import ScrollToElement from '../molecules/ScrollToElement';
// ___Assets_____________________________________________________________________________________________________________
import Image1 from '../../assets/images/image_1.png';
import Image2 from '../../assets/images/image_2.png';
import Image3 from '../../assets/images/image_3.png';
import ArrowDown from '../../assets/icons/arrow_down.svg';


// ___Component_________________________________________________________________________________________________________
const HeroHome = () => {

    const [showBanner1, setShowBanner1] = useState(true);
    const [showBanner2, setShowBanner2] = useState(false);
    const [showBanner3, setShowBanner3] = useState(false);

    // Side effect to make banner slide show
    useEffect(() => {
        const intervalId = setInterval(() => {
            setShowBanner1(showBanner3);
            setShowBanner2(showBanner1);
            setShowBanner3(showBanner2);
        }, 7000);
    
        return () => clearInterval(intervalId);
    }, [showBanner1, showBanner2, showBanner3]);

    return ( 
        <HeroWrapper>
            <HeroDescriptionWrapper>
                <HeaderOne>
                    The space is waiting for
                    <span>
                        you
                        <NavSliderDots
                            stateImage1={ showBanner1 }
                            stateImage2={ showBanner2 }
                            stateImage3={ showBanner3 }
                            setImage1={ setShowBanner1 }
                            setImage2={ setShowBanner2 }
                            setImage3={ setShowBanner3 }
                        />
                    </span>
                </HeaderOne>
                <ScrollToElement href='home__slider-section'>
                    <span>Explore tours</span>
                    <img src={ ArrowDown } alt='Icon with arrow down sign' />
                </ScrollToElement>
            </HeroDescriptionWrapper>
            { showBanner1 &&
                <HeroBanner 
                    src={ Image1 }
                    alt='A spaceship with a Planet on the back-view'
                />
            }
            { showBanner2 &&
                <HeroBanner 
                    src={ Image2 }
                    alt='A girl inside spaceship'
                />
            }
            { showBanner3 &&
                <HeroBanner 
                    src={ Image3 }
                    alt='An astronaut in open space'
                />
            }
        </HeroWrapper>
    );
}

export default HeroHome;
