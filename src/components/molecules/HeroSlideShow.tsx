// ___React______________________________________________________________________________________________________________
import { useEffect } from 'react';
// ___Components_________________________________________________________________________________________________________
import Image from '../atoms/Image';
// ___Assets_____________________________________________________________________________________________________________
import Image1 from '../../assets/images/image_1.png';
import Image2 from '../../assets/images/image_2.png';
import Image3 from '../../assets/images/image_3.png';

// ___Types______________________________________________________________________________________________________________
interface HeroSlideShowProps {
    stateImage1: boolean;
    stateImage2: boolean;
    stateImage3: boolean;
    setImage1: (value: React.SetStateAction<boolean>) => void;
    setImage2: (value: React.SetStateAction<boolean>) => void;
    setImage3: (value: React.SetStateAction<boolean>) => void;
}

// ___Component__________________________________________________________________________________________________________
const HeroSlideShow = ({
    stateImage1, 
    stateImage2, 
    stateImage3, 
    setImage1, 
    setImage2, 
    setImage3
}: HeroSlideShowProps) => {
    // Side effect to make banner slide show
    useEffect(() => {
        const intervalId = setInterval(() => {
            setImage1(stateImage3);
            setImage2(stateImage1);
            setImage3(stateImage2);
        }, 7000);

        return () => clearInterval(intervalId);
    }, [stateImage1, stateImage2, stateImage3]);

    return ( 
        <>
            { stateImage1 &&
                    <Image 
                        type='banner'
                        src={ Image1 }
                        alt='A spaceship with a Planet on the back-view'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 1 }}
                    />
            }
            { stateImage2 &&
                    <Image 
                        type='banner'
                        src={ Image2 }
                        alt='A girl inside spaceship'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 1 }}
                    />
            }
            { stateImage3 &&
                    <Image 
                        type='banner'
                        src={ Image3 }
                        alt='An astronaut in open space'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 1 }}
                    />
            }
        </>
    );
}

export default HeroSlideShow;