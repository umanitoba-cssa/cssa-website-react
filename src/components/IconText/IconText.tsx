import { Box, Heading, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface IIconCard {
    title: string;
    icon: any;
    to?: string;
}

export const IconText = ({ title, icon, to, children }: PropsWithChildren<IIconCard>) => {
    return (
        <Link href={to}>
            <HStack alignItems={'center'} justifyContent='middle'>
                <Icon w={8} h={10} as={icon} />
                <Box fontSize='lg' margin={0}>{children}</Box>
            </HStack>
        </Link>
    )
}