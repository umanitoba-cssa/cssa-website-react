import { AspectRatio, Box, Heading, HStack, Image, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface ITeaser {
    title: string;
    image: string;
    to?: string;
}

export const Teaser = ({title, image, to, children}: PropsWithChildren<ITeaser>) => {
    return (
        <Box marginBottom={'3rem'}>
            <HStack className="desktop-only" spacing={8}>
                <AspectRatio minW={'25rem'} ratio={9/6}><Image src={image} /></AspectRatio>
                <VStack alignItems={'left'}>
                    <Heading fontSize={"3xl"}>{title}</Heading>
                    <Box>{children}</Box>
                </VStack>
            </HStack>
            <VStack className="mobile-only" spacing={8}>
                <AspectRatio w='100%' ratio={9/6}><Image src={image} /></AspectRatio>
                <VStack alignItems={'left'}>
                    <Heading fontSize={"3xl"}>{title}</Heading>
                    <Box fontSize='lg'>{children}</Box>
                </VStack>
            </VStack>
        </Box>
    )
}