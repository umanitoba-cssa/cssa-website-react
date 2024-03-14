import { AspectRatio, Box, Heading, HStack, Image, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface IEventTeaser {
    title: string;
    image: string;
    to?: string;
}

export const EventTeaser = ({title, image, to, children}: PropsWithChildren<IEventTeaser>) => {
    return (
        <Box marginBottom={'3rem'}>
            <HStack className="desktop-only" spacing={8}>
                <AspectRatio minW={'35rem'} ratio={1/1}><Image src={image} /></AspectRatio>
                <VStack alignItems={'left'}>
                    <Heading fontSize={"3xl"}>{title}</Heading>
                    <Box>{children}</Box>
                </VStack>
            </HStack>
            <VStack className="mobile-only" spacing={8}>
                <AspectRatio w='100%' ratio={1/1}><Image src={image} /></AspectRatio>
                <VStack alignItems={'left'}>
                    <Heading fontSize={"3xl"}>{title}</Heading>
                    <Box fontSize='lg'>{children}</Box>
                </VStack>
            </VStack>
        </Box>
    )
}