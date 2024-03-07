import { Text, HStack, Box, Icon, Button, Link } from "@chakra-ui/react";
import { PageLayout } from "../../containers/PageLayout/PageLayout";
import { EventTeaser } from "../../components/EventTeaser/EventTeaser";
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaRegClock, FaTshirt } from 'react-icons/fa';

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

export const Goosies = () => {
        

    return (
        <PageLayout title="GOOS!ES!!!!!!!!!?!?!?!?!?!?" image="/img/backgrounds/home.jpg">
            <EventTeaser title="Goosies" image="/img/events/goosies.png">
            <Text>
            Ready for the "BEST" AWARD show, for the Computer Science community by the Computer Science 
            community? Come join us for this end-of-term event for lots of giggles and fun!
            </Text>
            <br></br>
            <Text>
            It's your chance to meet lots of new people and build connections. Have fun with us before the term ends!
            </Text>
            <br></br>
            <Text>
            Registration is required, so we know how many people to expect so we can serve you well!
            </Text>
            <br></br>
            <HStack>
                <Icon as={MdOutlineLocationOn}/>
                <Box fontSize={'me'}>VW's Social Club, University of Manitoba</Box>
            </HStack>
            <HStack>
                <Icon as={FaRegClock}/>
                <Box fontSize={'me'}>Friday April 5th, 2024</Box>
            </HStack>
            <HStack>
                <Icon as={FaTshirt}/>
                <Box fontSize={'me'}>Semi-Formal Dress</Box>
            </HStack>
            <br></br>
            <HStack>
                <Button colorScheme="facebook" size='lg'><Link href='https://umanitobacssa.ca'>Register Here</Link></Button>
                //make bigger
                <br></br>
                <Button colorScheme="facebook" size='lg'><Link href='https://umanitobacssa.ca'>Vote Here</Link></Button>
            </HStack>
            </EventTeaser> 
        </PageLayout>
    );
}

