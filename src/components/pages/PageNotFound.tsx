// ___Components_________________________________________________________________________________________________________
import HeaderOne from "../atoms/typography/HeaderOne/HeaderOne";
import HeroWrapper from "../atoms/wrappers/HeroWrapper/HeroWrapper";
import HeroBanner from "../atoms/HeroBanner";
// ___Assets_____________________________________________________________________________________________________________
import Banner from '../../assets/images/image_2.png';


// ___Component__________________________________________________________________________________________________________
const PageNotFound = () => {
    return ( 
        <HeroWrapper>
            <HeaderOne>
                Sorry, page not found!
                <span>404</span>
            </HeaderOne>
            <HeroBanner 
                src={ Banner }
                alt='A girl inside spaceship'
            />
        </HeroWrapper>
    );
}

export default PageNotFound;