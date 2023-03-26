// ___Components_________________________________________________________________________________________________________
import FlexWrapper from "../atoms/wrappers/FlexWrapper";
import AbsoluteCenteredWrapper from "../atoms/wrappers/AbsoluteCenteredWrapper";
import HeaderOne from "../atoms/typography/HeaderOne";
import Span from "../atoms/typography/Span";
import Image from "../atoms/Image";
// ___Assets_____________________________________________________________________________________________________________
import Banner from '../../assets/images/image_2.png';



// ___Component__________________________________________________________________________________________________________
const PageNotFound = () => {
    return ( 
        <FlexWrapper type='hero'>
            <AbsoluteCenteredWrapper 
                top='35%' 
                zIndex={ 1 }
            >
                <HeaderOne fontSize='30px'>
                    Sorry, page not found!
                    <Span type='hero-header' fontSize='100px' >404</Span>
                </HeaderOne>
            </AbsoluteCenteredWrapper>
            <Image 
                type='banner'
                src={ Banner }
                alt='A girl inside spaceship'
            />
        </FlexWrapper>
    );
}

export default PageNotFound;