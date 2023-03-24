// ___React_____________________________________________________________________________________________________________
import { useState, useEffect } from 'react';
// ___Apollo____________________________________________________________________________________________________________
import { useQuery } from '@apollo/client';
import { GET_HISTORIES_QUERY } from '../../gql/Query';
// ___Components________________________________________________________________________________________________________
import SliderWrapper from "../atoms/wrappers/SliderWrapper/SliderWrapper";
import SliderHeadWrapper from "../atoms/wrappers/SliderHeadWrapper/SliderHeadWrapper";
import HeaderTwo from "../atoms/typography/HeaderTwo/HeaderTwo";
import CarouselControls from '../molecules/CarouselControls';
import SliderCardsWrapper from "../atoms/wrappers/SliderCardsWrapper/SliderCardsWrapper";
import TourCard from "./TourCard";
import Paragraph from '../atoms/typography/Paragraph/Paragraph';
// ___Hooks_____________________________________________________________________________________________________________
import { useAddToFavorites } from '../../hooks/useAddToFavorites';
// ___Helpers___________________________________________________________________________________________________________
import { getImageNum } from '../../utils/getImageNum';

// ___Types_____________________________________________________________________________________________________________
interface CardData {
    id: string;
    title: string;
    details: string;
}


// ___Component_________________________________________________________________________________________________________
const SliderSectionHome = () => {

    const addToFavorites = useAddToFavorites();

    const [cardData, setCardData] = useState<CardData[] | null>(null);
    const [sliceStart, setSliceStart] = useState<number>(0);
    const [sliceEnd, setSliceEnd] = useState<number>(3);

    const { loading, error, data } = useQuery(GET_HISTORIES_QUERY);

    useEffect(() => {
        if (data) {
            setCardData(data.histories);
        }
    },[data]);

    return (
        <SliderWrapper id='home__slider-section' >
            <SliderHeadWrapper>
                <HeaderTwo>
                    Popular tours
                </HeaderTwo>
                <CarouselControls 
                    array={ cardData }
                    sliceStart={ sliceStart }
                    setSliceStart={ setSliceStart }
                    sliceEnd={ sliceEnd }
                    setSliceEnd={ setSliceEnd }
                />
            </SliderHeadWrapper>
            <SliderCardsWrapper>
                { loading && <Paragraph>Loading...</Paragraph>}
                { error && <Paragraph>Something went wrong! No connection with server.</Paragraph> }
                { cardData && cardData.map((data, index) => {
                    const num = getImageNum(index);
                    return (
                        <TourCard 
                            key={ data.id } 
                            title={ data.title } 
                            details={ data.details } 
                            imageNumber={ num }
                            action={ () => addToFavorites(data.id, data.title, data.details) }
                        />
                    )
                }).slice(sliceStart, sliceEnd) }
            </SliderCardsWrapper>
        </SliderWrapper>
    )
}

export default SliderSectionHome;