import { Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { PageLayout } from "../../containers/PageLayout/PageLayout";
import { MovieCard } from "../../components/MovieCard/MovieCard";

interface IEventData {
    title: string;
    image: string;
    start: string;
    end: string;
    location: string;
    to: string;
    description: string;
    status: string;
    moviename: string;
    poster: string;
}

export const MovieNight = () => {
      
      
    return (
        <PageLayout title="Movie Nights" image="/img/backgrounds/home.jpg">
            <Text>
                The CSSA is trying to host weekly movie nights! 
            
            </Text>
        </PageLayout>
    );
}