import { Text, AspectRatio, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PageLayout } from "../../containers/PageLayout/PageLayout";
import { EventCard } from "../../components/EventCard/EventCard";
import { error } from "console";

interface IMovieData {
    movie: string;
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
    const [movies, setMovies] = useState<IMovieData[]>([]);

    useEffect(() => {
        fetch('/data/events.json')
            .then(response => response.json())
            .then((data: { movie: IMovieData }[]) => {
                const movieData = data.map(item => item.movie);
                setMovies(movieData);
            })
            .catch(error => console.error('Error:', error));
    }, []);
        

    return (
        <PageLayout title="Movie Nights" image="/img/backgrounds/home.jpg">
            {movies.map((movie, index) => {
                const startTime = new Date(movie.start).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' });
                const endTime = new Date(movie.end).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' });

                return (
                    <div key={index}>
                        <Text fontSize={'md'}fontWeight={'800'}lineHeight={'10'}>
                        {movie.status} <br />
                    </Text>
                    <Text>
                        The CSSA is trying to host weekly nights! <br />
                        <br />
                        Our next movie night we are watching: {movie.moviename}<br />
                        The movie will be on {startTime} and be hosted in the {movie.location} <br />
                    </Text>
                    <br />
                    <AspectRatio ratio={8.5 / 11}>
                    <Image src={movie.poster} />
                </AspectRatio>
                    
                </div>
                );
            })}
        </PageLayout>
    );
}

