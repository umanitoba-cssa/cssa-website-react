import { Text, HStack, Box, Icon, Button, Link } from "@chakra-ui/react";
import { PageLayout } from "../../containers/PageLayout/PageLayout";
import { EventTeaser } from "../../components/EventTeaser/EventTeaser";
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaRegClock, FaTshirt } from 'react-icons/fa';

export const Goosies = () => {
        

    return (
        <PageLayout title="The Goosies!" image="/img/backgrounds/home.jpg">
            <EventTeaser title="The Goosies" image="/img/events/goosies.png">
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
            Registration is required, so we know how many people to expect and so we can serve you well!
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
            <Text>Tickets and voting are not available currently, check back later!</Text>
            <HStack>
                <Button colorScheme="gray" size='lg'><Link href='#'>Register Here</Link></Button>
                <br></br>
                <Button colorScheme="gray" size='lg'><Link href='#'>Vote Here</Link></Button>
            </HStack>
            </EventTeaser> 
        </PageLayout>
    );
}

