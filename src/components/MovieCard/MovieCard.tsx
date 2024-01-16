import { Box, Divider, Heading, Image, VStack, Text, Spacer, AspectRatio, Link } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface IMovieCard {
    title: string;
    image: string;
    footer?: React.ReactNode;
    to?: string;
    start: string;
    location: string;
    status: string;
    moviename: string;
    poster: string;
}

export const MovieCard = ({ title, image, to, footer, children }: PropsWithChildren<IMovieCard>) => {
    const heading = to ? (
        <Link href={to}><Heading fontSize={'xl'} marginBottom='0.5rem'>{title}</Heading></Link>
    ) : (
        <Heading fontSize={'xl'} marginBottom='0.5rem'>{title}</Heading>
    )

    return (
        <Box border='1px solid #DBD4CC' borderRadius='1rem' overflow={'hidden'}>
            <VStack height='100%' alignItems={'left'}>
                <AspectRatio ratio={3 / 2}>
                    <Image src={image} />
                </AspectRatio>
                <Box flexGrow={1} p='0.6rem 1rem 0 1rem'>
                    {heading}
                    <Box fontSize='lg'>{children}</Box>
                </Box>
                {footer &&
                    <>
                        <Spacer />
                        <Box p='0 1rem 1rem 1rem'>
                            <Divider margin='0 0 0.5rem 0' />
                            <Text fontSize='sm'>{footer}</Text>
                        </Box>
                    </>
                }
            </VStack>
        </Box>
    )
}