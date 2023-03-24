// ___Components_________________________________________________________________________________________________________
import HeroFavorites from "../organisms/HeroFavorites";
import SliderSectionFavorites from "../organisms/SliderSectionFavorites";


// ___Component__________________________________________________________________________________________________________
const Favorites = () => {
    return ( 
        <section className="favorites">
            <HeroFavorites />
            <SliderSectionFavorites />
        </section>
    );
}

export default Favorites;