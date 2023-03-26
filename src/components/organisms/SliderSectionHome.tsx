// ___React_____________________________________________________________________________________________________________
import { useState, useEffect } from 'react';
// ___Apollo____________________________________________________________________________________________________________
import { useQuery } from '@apollo/client';
import { GET_HISTORIES_QUERY } from '../../gql/Query';
// ___Components________________________________________________________________________________________________________
import GridWrapper from '../atoms/wrappers/GridWrapper';
import BoxWrapper from '../atoms/wrappers/BoxWrapper';
import FlexWrapper from '../atoms/wrappers/FlexWrapper';
import HeaderTwo from "../atoms/typography/HeaderTwo";
import CarouselControls from '../molecules/CarouselControls';
import TourCard from "./TourCard";
import Paragraph from '../atoms/typography/Paragraph';
import SliderDot from '../atoms/SliderDot/SliderDot';
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

    // Fetching the data setting the state with cards
    const [cardData, setCardData] = useState<CardData[] | null>(null);
    const { loading, error, data } = useQuery(GET_HISTORIES_QUERY);

    useEffect(() => {
        if (data) {
            setCardData(data.histories);
        }
    },[data]);

    // States to control carousel sliding
    const [cardCounter, setCardCounter] = useState<number>(0)
    const [sliceStart, setSliceStart] = useState<number>(0);
    const [sliceEnd, setSliceEnd] = useState<number>(3);
    const [chunkIndex, setChunkIndex] = useState(0);

    useEffect(() => {
        setSliceStart(cardCounter);
        setSliceEnd(cardCounter + 3);
        setChunkIndex(Math.floor(cardCounter / 3));
    }, [cardCounter]);

    return (
        <BoxWrapper 
            id='home__slider-section' 
            type='home-slider'
        >
            <FlexWrapper type='slider-header'>
                <HeaderTwo>Popular tours</HeaderTwo>
                <CarouselControls 
                    cardData={ cardData }
                    cardCounter={ cardCounter }
                    setCardCounter={ setCardCounter }
                />
            </FlexWrapper>
            <GridWrapper type='home-slider' >
                { loading && <Paragraph>Loading...</Paragraph>}
                { error && <Paragraph>Something went wrong! No connection with server.</Paragraph> }
                { cardData && cardData.map((data, index) => {
                    const num = getImageNum(index);
                    return (
                        <TourCard 
                            key={ data.id } 
                            id={ data.id }
                            title={ data.title } 
                            details={ data.details } 
                            imageNumber={ num }
                        />
                    )
                }).slice(sliceStart, sliceEnd) }
            </GridWrapper>
            <FlexWrapper
                justifyContent='center' 
                alignItems='center' 
                margin='64px 0 0 0'
                gap='8px'
            >
                {cardData && Array.from({length: Math.floor(cardData.length / 3)}, (_, i) => i).map((i) => (
                    <SliderDot
                        key={ i }
                        color='black'
                        active={ i === chunkIndex }
                        handleClick={ () => setCardCounter(i * 3) }
                    />
                ))}
            </FlexWrapper>
        </BoxWrapper>
    )
}

export default SliderSectionHome;