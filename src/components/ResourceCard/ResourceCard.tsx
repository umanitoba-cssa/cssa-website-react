import { LinkIcon } from "@chakra-ui/icons";
import { Box, VStack, Heading, StackDivider, HStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface IResourceCard {
    title: string;
    desc: string;
    url: string;
}

export const ResourceCard = ({ title, desc, url }: PropsWithChildren<IResourceCard>) => {
    return (
        <a href={url}>
            <Box border='1px solid #DBD4CC' borderRadius='1rem' overflow={'hidden'} padding={5}>
                <VStack alignItems={'left'} fontSize={'sm'} divider={<StackDivider/>}>
                    <HStack>
                        <LinkIcon/>
                        <Heading fontSize={'md'}>{title}</Heading>
                    </HStack>
                    <Box>{desc}</Box>
                </VStack>
            </Box>
        </a>
    )
}