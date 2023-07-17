import { Box, Divider, Heading, Image, VStack, Text, Spacer, AspectRatio } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface IImageCard {
    title: string;
    image: string;
    footer: string;
    to?: string;
}

export const ImageCard = ({title, image, to, footer, children}: PropsWithChildren<IImageCard>) => {
    return (
        <Box border='1px solid #DBD4CC' borderRadius='1rem' overflow={'hidden'}>
            <VStack height='100%' alignItems={'left'}>
                <AspectRatio ratio={3/2}>
                    <Image src={image} />
                </AspectRatio>
                <Box flexGrow={1} p='0.6rem 1rem 0 1rem'>
                    <Heading fontSize={'xl'} marginBottom='0.5rem'>{title}</Heading>
                    <Box fontSize='lg'>{children}</Box>
                </Box>
                <Spacer/>
                <Box p='0 1rem 1rem 1rem'>
                    <Divider margin='0 0 0.5rem 0'/>
                    <Text fontSize='sm'>{footer}</Text>
                </Box>
            </VStack>
        </Box>
    )
}