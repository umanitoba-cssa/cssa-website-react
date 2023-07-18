import { Box, VStack, HStack, Icon } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { ImageCard } from "../ImageCard/ImageCard";
import { MdOutlineLocationOn } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';

interface IEventCard {
    title: string;
    image: string;
    time: string;
    location: string;
    to?: string;
}

export const EventCard = ({ title, image, to, time, location, children }: PropsWithChildren<IEventCard>) => {

    const dateText = new Date(time).toLocaleString('en-US', {dateStyle: 'long', timeStyle: 'short'})

    const footer = (
        <VStack align={'left'}>
            <HStack>
                <Icon as={MdOutlineLocationOn}/>
                <Box fontSize={'sm'}>{location}</Box>
            </HStack>
            <HStack>
                <Icon as={FaRegClock}/>
                <Box fontSize={'sm'}>{dateText}</Box>
            </HStack>
        </VStack>
    )
    return (
        <ImageCard title={title} image={image} to={to} footer={footer}>
            {children}
        </ImageCard>
    )
}