// ___Components_________________________________________________________________________________________________________
import HeroHome from "../organisms/HeroHome";
import SliderSectionHome from "../organisms/SliderSectionHome";


// ___Component__________________________________________________________________________________________________________
const Home = () => {
    return ( 
        <section className="home">
            <HeroHome />
            <SliderSectionHome />
        </section>
    );
}

export default Home;